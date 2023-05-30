import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Loading, StatefulData } from '../../domain/StatefulData';
import { GithubComponentStatus } from '../../domain/github/GithubComponent';
import { GithubIndicator } from '../../domain/github/GithubStatus';
import { GithubSummary } from '../../domain/github/GithubSummary';
import { GithubUseCase } from '../../domain/github/GithubUseCase';

@Component({
    selector: 'github-system-status',
    templateUrl: './github-system-status.component.html',
    styleUrls: ['./github-system-status.component.css'],
    standalone: true,
    imports: [MatIconModule, MatTooltipModule, NgIf, NgFor]
})
export class GithubSystemStatusComponent implements OnInit {
    githubInformation: StatefulData<GithubSummary> = Loading();
    private readonly useCase = new GithubUseCase();

    async ngOnInit(): Promise<void> {
        this.githubInformation = await this.useCase.getGithubStatusInfo();
    }

    getIconByStatus(status: GithubIndicator | GithubComponentStatus): string {
        switch (status) {
            case 'none':
                return 'check';
            case 'operational':
                return 'check_circle';
            case 'minor':
            case 'degraded_performance':
                return 'info_outline';
            case 'major':
            case 'partial_outage':
                return 'warning_outline';
            case 'critical':
            case 'major_outage':
                return 'error_outline';
        }
    }

    getSummaryColorByStatus(status: GithubIndicator): string {
        switch (status) {
            case 'none':
                return 'summary-green';
            case 'minor':
                return 'summary-blue';
            case 'major':
                return 'summary-yellow';
            case 'critical':
                return 'summary-red';
        }
    }

    getIconColorsByStatus(status: GithubComponentStatus): string {
        switch (status) {
            case 'operational':
                return 'green-icon';
            case 'degraded_performance':
                return 'blue-icon';
            case 'partial_outage':
                return 'yellow-icon';
            case 'major_outage':
                return 'red-icon';
        }
    }
}

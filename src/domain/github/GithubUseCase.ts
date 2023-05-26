import { Failure, StatefulData, Success } from '../StatefulData';
import { GithubComponent } from './GithubComponent';
import { GithubRepository } from './GithubRepository';
import { GithubSummary, GithubSummaryDecoder } from './GithubSummary';

export class GithubUseCase {
    constructor(private readonly repository = new GithubRepository()) {}

    async getGithubStatusInfo(): Promise<StatefulData<GithubSummary>> {
        try {
            const result = await this.repository.api(GithubSummaryDecoder, '/summary.json');
            const components = result.components.reduce<GithubComponent[]>((acc, curr) => {
                if (curr.name.includes('Visit')) {
                    return acc;
                }
                return [...acc, curr];
            }, []);
            return Success({ ...result, components });
        } catch (error) {
            const message = error instanceof Error ? error.message : '';
            return Failure(message);
        }
    }
}

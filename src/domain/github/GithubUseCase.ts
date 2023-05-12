import { Failure, StatefulData, Success } from '../StatefulData';
import { GithubRepository } from './GithubRepository';
import { GithubSummary, GithubSummaryDecoder } from './GithubSummary';

export class GithubUseCase {
    constructor(private readonly repository = new GithubRepository()) {}

    async getGithubStatusInfo(): Promise<StatefulData<GithubSummary>> {
        try {
            const data = await this.repository.api(GithubSummaryDecoder, '/summary.json');
            return Success(data);
        } catch (error) {
            const message = error instanceof Error ? error.message : '';
            return Failure(message);
        }
    }
}

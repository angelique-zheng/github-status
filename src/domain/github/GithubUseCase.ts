import type { GithubComponent } from './GithubComponent'
import { GithubRepository } from './GithubRepository'
import { GithubSummaryDecoder, type GithubSummary } from './GithubSummary'

export class GithubUseCase {
    constructor(private readonly repository = new GithubRepository()) {}

    async getGithubStatusInfo(): Promise<GithubSummary> {
        const result = await this.repository.api(GithubSummaryDecoder, '/summary.json')
        const components = result.components.reduce<GithubComponent[]>((acc, curr) => {
            if (curr.name.includes('Visit')) {
                return acc
            }
            return [...acc, curr]
        }, [])
        return { ...result, components }
    }
}

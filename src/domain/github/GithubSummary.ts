import { array, field, record, string, type DecoderFunction } from 'typescript-json-decoder'
import { decodeDateToTimestamp } from '../../utils/decoder'
import { GithubComponentDecoder, type GithubComponent } from './GithubComponent'
import { GithubStatusDecoder, type GithubStatus } from './GithubStatus'

export type GithubSummary = {
    page: {
        id: string
        name: string
        url: string
        timeZone: string
        updatedAt: number
    }
    components: GithubComponent[]
    status: GithubStatus
}

export const GithubSummaryDecoder: DecoderFunction<GithubSummary> = (value: unknown) => {
    return record({
        page: record({
            id: string,
            name: string,
            url: string,
            timeZone: field('time_zone', string),
            updatedAt: field('updated_at', decodeDateToTimestamp)
        }),
        components: array(GithubComponentDecoder),
        status: GithubStatusDecoder
    })(value)
}

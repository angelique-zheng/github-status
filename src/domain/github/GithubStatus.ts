import { record, string, union, type DecoderFunction } from 'typescript-json-decoder'

export type GithubIndicator = 'none' | 'minor' | 'major' | 'critical'

const GithubIndicatorDecoder: DecoderFunction<GithubIndicator> = (value: unknown) => {
    return union('none', 'minor', 'major', 'critical')(value)
}

export type GithubStatus = {
    indicator: GithubIndicator
    description: string
}

export const GithubStatusDecoder: DecoderFunction<GithubStatus> = (value: unknown) => {
    return record({
        indicator: GithubIndicatorDecoder,
        description: string
    })(value)
}

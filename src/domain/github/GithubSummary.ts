import { DecoderFunction, array, field, record, string } from 'typescript-json-decoder';
import { decodeDateToTimestamp } from '../../utils/decoder';
import { GithubComponent, GithubComponentDecoder } from './GithubComponent';
import { GithubStatus, GithubStatusDecoder } from './GithubStatus';

export type GithubSummary = {
    page: {
        id: string;
        name: string;
        url: string;
        timeZone: string;
        updatedAt: number;
    };
    components: GithubComponent[];
    status: GithubStatus;
};

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
    })(value);
};

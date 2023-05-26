import { DecoderFunction, boolean, field, number, record, string, union } from 'typescript-json-decoder';
import { decodeDateToTimestamp, nullIsUndefined } from '../../utils/decoder';

export type GithubComponentStatus = 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage';

const GithubComponentStatusDecoder: DecoderFunction<GithubComponentStatus> = (value: unknown) => {
    return union('operational', 'degraded_performance', 'partial_outage', 'major_outage')(value);
};

export type GithubComponent = {
    id: string;
    name: string;
    status: GithubComponentStatus;
    createdAt: number;
    updatedAt: number;
    position: number;
    description?: string;
    showcase: boolean;
    startDate?: number;
    groupId?: string;
    pageId: string;
    group: boolean;
};

export const GithubComponentDecoder: DecoderFunction<GithubComponent> = (value: unknown) => {
    return record({
        id: string,
        name: string,
        status: GithubComponentStatusDecoder,
        createdAt: field('created_at', decodeDateToTimestamp),
        updatedAt: field('updated_at', decodeDateToTimestamp),
        position: number,
        description: union(string, nullIsUndefined),
        showcase: boolean,
        startDate: field('start_date', union(decodeDateToTimestamp, nullIsUndefined)),
        groupId: field('group_id', union(string, nullIsUndefined)),
        pageId: field('page_id', string),
        group: boolean
    })(value);
};

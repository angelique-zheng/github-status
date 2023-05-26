import { DecoderFunction } from 'typescript-json-decoder';
import { ApiDatasource } from '../../io/ApiDatasource';
import { ApiDatasourceOptions } from '../../io/ApiDatasourceOptions';
import { GITHUB_STATUS_API_URL } from '../../res/constants';
import { ApiError } from '../errors/ApiError';
import { DecoderError } from '../errors/DecoderError';

export class GithubRepository {
    constructor(private readonly datasource = new ApiDatasource(GITHUB_STATUS_API_URL)) {}

    async api<T>(decoder: DecoderFunction<T>, path: string, options?: ApiDatasourceOptions): Promise<T> {
        try {
            const response = await this.datasource.get(path, options);
            return decoder(response);
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new DecoderError(error);
        }
    }
}

import axios, { AxiosInstance } from 'axios';
import { ApiError } from '../domain/errors/ApiError';
import { serializeUrlParameters } from '../utils/url';
import { ApiDatasourceOptions } from './ApiDatasourceOptions';

export type ApiDatasourceMethod = 'get' | 'post' | 'put' | 'delete';

export class ApiDatasource {
    constructor(private readonly baseUrl: string = '', private readonly axiosInstance: AxiosInstance = axios) {}

    private buildUrlPath(path: string, params?: Record<string, unknown>): string {
        return `${this.baseUrl}${path}${serializeUrlParameters(params)}`;
    }

    get(path: string, options?: ApiDatasourceOptions): Promise<unknown> {
        return this.call('get', path, options);
    }

    post(path: string, options?: ApiDatasourceOptions): Promise<unknown> {
        return this.call('post', path, options);
    }

    private async call(method: ApiDatasourceMethod, path: string, options: ApiDatasourceOptions = {}): Promise<unknown> {
        try {
            const url = this.buildUrlPath(path, options.params);
            const response = await this.axiosInstance({
                method,
                url,
                headers: options.headers,
                data: options.data,
                timeout: options.timeout
            });
            return response.data;
        } catch (error) {
            throw new ApiError(error);
        }
    }
}

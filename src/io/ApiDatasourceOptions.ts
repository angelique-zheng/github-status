export interface ApiDatasourceOptions {
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
    data?: unknown;
    timeout?: number;
}

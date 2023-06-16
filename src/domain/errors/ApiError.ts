export class ApiError extends Error {
    readonly name: string = 'ApiError';

    constructor(error: unknown) {
        super(error instanceof Error ? error.message : JSON.stringify(error));
    }
}

export class ApiError extends Error {
    readonly name: string = 'ApiError';

    constructor(error: unknown) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        super(message);
    }
}

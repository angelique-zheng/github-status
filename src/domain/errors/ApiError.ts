export class ApiError extends Error {
    override readonly name: string = 'ApiError';

    constructor(error: unknown) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        super(message);
    }
}

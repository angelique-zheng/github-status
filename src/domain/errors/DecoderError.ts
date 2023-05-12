export class DecoderError extends Error {
    readonly name: string = 'DecoderError';

    constructor(error: unknown) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        super(message);
    }
}

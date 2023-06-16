export class DecoderError extends Error {
    readonly name: string = 'DecoderError';

    constructor(error: unknown) {
        super(error instanceof Error ? error.message : JSON.stringify(error));
    }
}

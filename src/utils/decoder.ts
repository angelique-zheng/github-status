import { DateTime } from 'luxon';
import { Decoder, DecoderFunction, decode, nil, string } from 'typescript-json-decoder';
import { DecoderError } from '../domain/errors/DecoderError';

export const stringToNumber: DecoderFunction<number> = (value: unknown) => {
    const decoded = Number.parseFloat(string(value));
    if (isNaN(decoded)) {
        throw new DecoderError(`Failed to parse number value: ${value}`);
    }
    return decoded;
};

const decodeConstant =
    <T>(decoder: Decoder<unknown>, returned: T) =>
    (value: unknown): T => {
        decode(decoder)(value);
        return returned;
    };

export const nullIsUndefined = decodeConstant(nil, undefined);

export const decodeDateToTimestamp: DecoderFunction<number> = (value: unknown) => {
    const timestamp = DateTime.fromISO(value as string)
        .toJSDate()
        .getTime();
    if (isNaN(timestamp)) {
        throw new DecoderError(`Failed to decode date value: ${value}`);
    }
    return timestamp;
};

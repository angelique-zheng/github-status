export const serializeUrlParameters = (params?: Record<string, unknown>, startDelimiter = '?'): string => {
    if (!params) {
        return '';
    }

    const serializedParams = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&');

    return startDelimiter + serializedParams;
};

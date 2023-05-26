export type LoadingData = {
    status: 'Loading';
};

export type SuccessData<T> = {
    status: 'Success';
    data: T;
};
export type FailureData<E = string> = {
    status: 'Failure';
    error?: E;
};

export type StatefulData<T, E = string> = LoadingData | SuccessData<T> | FailureData<E>;

export const Loading = (): LoadingData => ({
    status: 'Loading'
});

export const Success = <T>(data: T): SuccessData<T> => ({
    status: 'Success',
    data
});

export const Failure = <E = string>(error?: E): FailureData<E> => ({
    status: 'Failure',
    error
});

export const unwrapSuccessData = <T>(data: StatefulData<T>): T | undefined => {
    return data.status === 'Success' ? data.data : undefined;
};

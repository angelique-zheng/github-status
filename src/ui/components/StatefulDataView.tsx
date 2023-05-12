import { CircularProgress } from '@mui/material';
import { StatefulData } from '../../domain/StatefulData';
import { FailureMessage } from './FailureMessage';

type StatefulDataViewProps<T> = {
    statefulData: StatefulData<T>;
    renderSuccess: React.FC<T>;
    renderLoading?: React.FC<void>;
    renderFailure?: React.FC<string | undefined>;
};

export const StatefulDataView = <T,>({ statefulData, renderSuccess, renderLoading, renderFailure }: StatefulDataViewProps<T>) => {
    switch (statefulData.status) {
        case 'Loading':
            return renderLoading?.() ?? <CircularProgress />;
        case 'Success':
            return renderSuccess(statefulData.data);
        case 'Failure':
            return renderFailure?.(statefulData.error) ?? <FailureMessage error={statefulData.error} />;
    }
};

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { red } from '@mui/material/colors';
import { strings } from '../../res/strings';
import { StyleSheet } from '../../utils/StyleSheet';

type FailureMessageProps = {
    error?: string;
};

export const FailureMessage: React.FC<FailureMessageProps> = ({ error }) => {
    console.error('Error: ', error);

    return (
        <div style={styles.main}>
            <div style={styles.container}>
                <CancelOutlinedIcon style={styles.icon} />
                <h2>{strings.errors.defaultError}</h2>
            </div>
        </div>
    );
};

const styles: StyleSheet = {
    main: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        width: 200,
        height: 200,
        color: red.A700
    }
};

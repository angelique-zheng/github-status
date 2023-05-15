import { green, orange, red } from '@mui/material/colors';
import { GithubStatus } from '../../domain/github/GithubStatus';
import { icons } from '../../res/icons';
import { StyleSheet } from '../../utils/StyleSheet';

type SummaryStatusProps = {
    status: GithubStatus;
};

export const SummaryStatus: React.FC<SummaryStatusProps> = ({ status }) => {
    return (
        <div style={styles.container}>
            <img style={styles.summaryStatusIcon} src={statusIcon[status.indicator]} />
            <h2>{status.description}</h2>
        </div>
    );
};

const styles: StyleSheet = {
    container: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: green[500],
        color: 'white',
        alignItems: 'center',
        margin: '16px 24px',
        paddingLeft: '16px',
        borderRadius: '5px'
    },
    summaryStatusIcon: {
        width: '40px',
        height: '40px'
    },
    none: {
        backgroundColor: green[600]
    },
    minor: {
        backgroundColor: green[300]
    },
    major: {
        backgroundColor: orange.A700
    },
    critical: {
        backgroundColor: red[900]
    }
};

const statusIcon = {
    none: icons.check,
    minor: icons.info,
    major: icons.attention,
    critical: icons.error
};

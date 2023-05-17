/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { green, orange, red } from '@mui/material/colors';
import { GithubStatus } from '../../domain/github/GithubStatus';
import { icons } from '../../res/icons';

type SummaryStatusProps = {
    status: GithubStatus;
};

export const SummaryStatus: React.FC<SummaryStatusProps> = ({ status }) => {
    return (
        <div css={styles.container}>
            <img css={styles.summaryStatusIcon} src={statusIcon[status.indicator]} />
            <h2>{status.description}</h2>
        </div>
    );
};

const styles = {
    container: css({
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: green[500],
        color: 'white',
        alignItems: 'center',
        margin: '16px 24px',
        paddingLeft: '16px',
        borderRadius: '5px'
    }),
    summaryStatusIcon: css({
        width: '40px',
        height: '40px'
    }),
    none: css({
        backgroundColor: green[600]
    }),
    minor: css({
        backgroundColor: green[300]
    }),
    major: css({
        backgroundColor: orange.A700
    }),
    critical: css({
        backgroundColor: red[900]
    })
};

const statusIcon = {
    none: icons.check,
    minor: icons.info,
    major: icons.attention,
    critical: icons.error
};

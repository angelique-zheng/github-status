/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { red } from '@mui/material/colors';
import { strings } from '../../res/strings';

type FailureMessageProps = {
    error?: string;
};

export const FailureMessage: React.FC<FailureMessageProps> = ({ error }) => {
    error && console.error('Error: ', error);

    return (
        <div css={styles.main}>
            <div css={styles.container}>
                <CancelOutlinedIcon css={styles.icon} />
                <h2>{error ? error : strings.errors.defaultError}</h2>
            </div>
        </div>
    );
};

const styles = {
    main: css({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    container: css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }),
    icon: css({
        width: 200,
        height: 200,
        color: red.A700
    })
};

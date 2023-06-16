/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Tooltip } from '@mui/material';
import { useMemo } from 'react';
import { GithubComponent } from '../../../domain/github/GithubComponent';

type GithunComponentItemStatusProps = {
    data: GithubComponent;
};

export const GithubComponentItemStatus: React.FC<GithunComponentItemStatusProps> = ({ data }) => {
    const StatusIconComponent = useMemo(() => statusIcon[data.status], [data.status]);
    const iconColor: string = useMemo(() => statusIconColor[data.status], [data.status]);

    return (
        <div css={styles.itemContainer}>
            <div css={styles.nameCheckContainer}>
                <div css={styles.nameContainer}>
                    <h4 css={styles.name}>{data.name}</h4>
                    {data.description && (
                        <Tooltip title={data.description} placement="top" css={styles.infoIconContainer}>
                            <HelpOutlineIcon css={styles.infoIcon} />
                        </Tooltip>
                    )}
                </div>
                <StatusIconComponent css={{ color: iconColor }} />
            </div>
            <p css={styles.status}>{data.status}</p>
        </div>
    );
};

const styles = {
    itemContainer: css({
        border: '1px solid grey',
        padding: '10px 20px',
        borderBottom: 'none',
        '&:nth-last-child(1)': {
            borderBottom: '1px solid grey'
        },
        '@media (min-width: 900px)': {
            '&:nth-child(odd)': {
                borderRight: 'none'
            },
            '&:nth-last-child(-n + 2)': {
                borderBottom: '1px solid grey'
            }
        }
    }),
    nameCheckContainer: css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }),
    nameContainer: css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }),
    name: css({
        margin: '10px 6px 8px 0px'
    }),
    infoIconContainer: css({
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }),
    infoIcon: css({
        color: '#666666',
        width: 18,
        height: 18
    }),
    status: css({
        margin: 0,
        textTransform: 'capitalize'
    })
};

const statusIcon = {
    operational: CheckCircleIcon,
    degraded_performance: InfoIcon,
    partial_outage: WarningAmberIcon,
    major_outage: ErrorOutlineIcon
};

const statusIconColor = {
    operational: '#43a047',
    degraded_performance: '#1976d2',
    partial_outage: '#e18801',
    major_outage: '#c30000'
};

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip } from '@mui/material';
import { GithubComponent } from '../../domain/github/GithubComponent';

type ComponentsStatusViewProps = {
    componentsStatus: GithubComponent[];
};

export const ComponentsStatusView: React.FC<ComponentsStatusViewProps> = ({ componentsStatus }) => {
    return (
        <div css={styles.mainContainer}>
            {componentsStatus.map(data => (
                <ComponentsStatusItem data={data} key={data.id} />
            ))}
        </div>
    );
};

type ComponentsStatusItemProps = {
    data: GithubComponent;
};

const ComponentsStatusItem: React.FC<ComponentsStatusItemProps> = ({ data }) => {
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
                <CheckCircleIcon css={styles.checkIcon} />
            </div>
            <p css={styles.status}>{data.status}</p>
        </div>
    );
};

const styles = {
    mainContainer: css({
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        '@media (min-width: 900px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    }),
    itemContainer: css({
        border: '1px solid grey',
        padding: '10px 20px',
        borderBottom: 'none',
        '&:nth-last-child(1)': {
            borderBottom: '1px solid grey'
        },
        '@media (min-width: 900px)': {
            '&:nth-child(odd)': {
                borderBottom: 'none',
                borderRight: 'none'
            },
            '&:nth-child(even)': {
                borderBottom: 'none'
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
    checkIcon: css({
        color: '#43a047'
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

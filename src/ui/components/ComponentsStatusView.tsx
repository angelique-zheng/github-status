/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
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
                    <p css={styles.name}>{data.name}</p>
                    <HelpOutlineIcon css={styles.infoIcon} />
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
        gap: '1rem'
    }),
    itemContainer: css({
        width: 300,
        border: 'solid',
        padding: '10px 20px'
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
    infoIcon: css({
        color: '#666666',
        width: 18,
        height: 18
    }),
    status: css({
        margin: 0
    })
};

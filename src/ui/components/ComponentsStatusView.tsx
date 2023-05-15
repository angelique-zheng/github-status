import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { GithubComponent } from '../../domain/github/GithubComponent';
import { StyleSheet } from '../../utils/StyleSheet';

type ComponentsStatusViewProps = {
    componentsStatus: GithubComponent[];
};

export const ComponentsStatusView: React.FC<ComponentsStatusViewProps> = ({ componentsStatus }) => {
    return (
        <div style={styles.mainContainer}>
            {componentsStatus.map(data => (
                <ComponentsStatusItem data={data} />
            ))}
        </div>
    );
};

type ComponentsStatusItemProps = {
    data: GithubComponent;
};

const ComponentsStatusItem: React.FC<ComponentsStatusItemProps> = ({ data }) => {
    return (
        <div style={styles.itemContainer}>
            <div style={styles.nameCheckContainer}>
                <div style={styles.nameContainer}>
                    <p style={styles.name}>{data.name}</p>
                    <HelpOutlineIcon sx={styles.infoIcon} />
                </div>
                <CheckCircleIcon sx={styles.checkIcon} />
            </div>
            <p style={styles.status}>{data.status}</p>
        </div>
    );
};

const styles: StyleSheet = {
    mainContainer: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gap: '1rem'
    },
    itemContainer: {
        width: 300,
        border: 'solid',
        padding: '10px 20px'
    },
    nameCheckContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        margin: '10px 6px 8px 0px'
    },
    checkIcon: {
        color: '#43a047'
    },
    infoIcon: {
        color: '#666666',
        width: 18,
        height: 18
    },
    status: {
        margin: 0
    }
};

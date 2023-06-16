/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GithubComponent } from '../../../domain/github/GithubComponent';
import { GithubComponentItemStatus } from './GithubComponentItemStatus';

type GithubComponentsStatusProps = {
    components: GithubComponent[];
};

export const GithubComponentsStatus: React.FC<GithubComponentsStatusProps> = ({ components }) => {
    return (
        <div css={styles.mainContainer}>
            {components.map(data => (
                <GithubComponentItemStatus data={data} key={data.id} />
            ))}
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
    })
};

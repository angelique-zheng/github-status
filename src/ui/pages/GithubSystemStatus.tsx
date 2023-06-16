/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from '@mui/material';
import useAsyncEffect from '@n1ru4l/use-async-effect';
import { useState } from 'react';
import { Loading, StatefulData } from '../../domain/StatefulData';
import { GithubSummary } from '../../domain/github/GithubSummary';
import { GithubUseCase } from '../../domain/github/GithubUseCase';
import { strings } from '../../res/strings';
import { StatefulDataView } from '../components/StatefulDataView';
import { GithubComponentsStatus } from '../components/github/GithubComponentsStatus';
import { GithubSummaryStatus } from '../components/github/GithubSummaryStatus';

export const GithubSystemStatus: React.FC = () => {
    const [githubData, setGithubData] = useState<StatefulData<GithubSummary>>(Loading());
    const useCase = new GithubUseCase();

    useAsyncEffect(function* (_, call) {
        setGithubData(yield* call(useCase.getGithubStatusInfo()));
    }, []);

    const reloadPages = () => {
        window.location.reload();
    };

    const renderSuccess = (data: GithubSummary) => {
        return (
            <main css={styles.mainContainer}>
                <GithubSummaryStatus status={data.status} />
                <div css={styles.statusContainer}>
                    <h2>{strings.pages.github.currentStatus}</h2>
                    <IconButton onClick={reloadPages}>
                        <ReplayIcon />
                    </IconButton>
                </div>
                <GithubComponentsStatus components={data.components} />
            </main>
        );
    };

    return <StatefulDataView statefulData={githubData} renderSuccess={renderSuccess} />;
};

const styles = {
    mainContainer: css({
        margin: '0px 100px',
        '@media (min-width: 900px)': {
            margin: '0px 200px'
        }
    }),
    statusContainer: css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    })
};

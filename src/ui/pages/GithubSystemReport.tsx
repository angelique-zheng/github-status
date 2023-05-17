/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useAsyncEffect from '@n1ru4l/use-async-effect';
import { useState } from 'react';
import { Loading, StatefulData } from '../../domain/StatefulData';
import { GithubSummary } from '../../domain/github/GithubSummary';
import { GithubUseCase } from '../../domain/github/GithubUseCase';
import { ComponentsStatusView } from '../components/ComponentsStatusView';
import { StatefulDataView } from '../components/StatefulDataView';
import { SummaryStatus } from '../components/SummaryStatus';

export const GithubSystemReport: React.FC = () => {
    const [githubData, setGithubData] = useState<StatefulData<GithubSummary>>(Loading());
    const useCase = new GithubUseCase();

    useAsyncEffect(function* (onCancel, call) {
        setGithubData(yield* call(useCase.getGithubStatusInfo()));
    }, []);

    const renderSuccess = (data: GithubSummary) => {
        return (
            <main css={styles.mainContainer}>
                <SummaryStatus status={data.status} />
                <ComponentsStatusView componentsStatus={data.components} />
            </main>
        );
    };

    return <StatefulDataView statefulData={githubData} renderSuccess={renderSuccess} />;
};

const styles = {
    mainContainer: css({
        margin: '0px 200px'
    })
};

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './assets/github-mark.svg';
import { strings } from './res/strings';

export const App: React.FC = () => {
    const navigate = useNavigate();

    const goToGithubSystemReport = () => {
        navigate('/status');
    };

    return (
        <main className="App">
            <h3>This is not an official github site</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <h4>A kind of clone of the site https://www.githubstatus.com/</h4>
            <Button onClick={goToGithubSystemReport} variant="contained">
                {strings.navigation.seeStatus}
            </Button>
        </main>
    );
};

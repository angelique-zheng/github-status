import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import { GithubSystemReport } from './ui/pages/GithubSystemReport';

export const ReactDefaultApp: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ReactDefaultApp />} />
                <Route path="/status" element={<GithubSystemReport />} />
            </Routes>
        </BrowserRouter>
    );
};

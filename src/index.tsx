import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { GithubSystemStatus } from './ui/pages/GithubSystemStatus';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/status" element={<GithubSystemStatus />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

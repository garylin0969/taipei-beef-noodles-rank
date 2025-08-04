import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { QueryProvider } from './providers';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryProvider>
            <App />
        </QueryProvider>
    </StrictMode>
);

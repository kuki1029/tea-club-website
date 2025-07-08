import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

if (!StrictMode) {
  throw new Error('');
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

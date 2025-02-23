import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container); // React 18의 createRoot API 사용
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
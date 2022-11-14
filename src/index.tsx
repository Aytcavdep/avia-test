import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import AviaForm from './pages/AviaForm';
import AviaInfo from './pages/AviaInfo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AviaForm />
    <AviaInfo />
  </React.StrictMode>
);

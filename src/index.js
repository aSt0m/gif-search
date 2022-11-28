import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import GifExpertApp from './Components/GifExpertApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);


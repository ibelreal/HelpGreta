import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';


ReactDOM.render(<BrowserRouter basename="/HelpGreta">
    <App />
</BrowserRouter>, document.getElementById('root'));

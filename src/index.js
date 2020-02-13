import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';


//basename="/HelpGreta"
ReactDOM.render(<BrowserRouter  >
    <App />
</BrowserRouter>, document.getElementById('root'));

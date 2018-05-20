import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-119584888-1');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

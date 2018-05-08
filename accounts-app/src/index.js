import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Records from './components/Records';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<Records />, document.getElementById('root'));
registerServiceWorker();

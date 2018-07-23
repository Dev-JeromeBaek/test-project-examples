import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/public/stylesheets/index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

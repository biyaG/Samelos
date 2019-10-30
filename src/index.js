import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Gallery.js';


//before all  ->  Navigation
ReactDOM.render(<Navigation />, document.getElementById('root'));


serviceWorker.unregister();

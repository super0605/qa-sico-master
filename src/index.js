import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './root.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

const Root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();

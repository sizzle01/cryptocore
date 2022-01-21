import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
 import 'antd/dist/antd.css'
 import Store from './app/store'
 import {Provider} from 'react-redux';
ReactDom.render(
<Router>
<Provider store={Store}>
<App />
</Provider>
</Router>,
 document.getElementById('root')); 
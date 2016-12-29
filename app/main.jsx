import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './stores';
import Index from './components/Index';
import Demo from './components/Demo';
import Footmark from './components/Footmark';
import Classify from './components/Classify';
import Lable from './components/Lable';
import './style/App.css';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" >
              <IndexRoute   component={Index}/>
              <Route path="/index"  component={Index}/>
              <Route path="/demo" component={Demo}/>
              <Route path="/lable" component={Lable}/>
              <Route path="/classify" component={Classify}/>
              <Route path="/footmark" component={Footmark}/>
            </Route>
        </Router>
   </Provider>,
 document.body.appendChild(document.createElement('div')))

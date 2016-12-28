import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './container/App.jsx';
import AllMemosRoute from './routes/AllMemosRoute.jsx';
import configureStore from './stores';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/"  component={App}>
            <IndexRoute component={AllMemosRoute}/>
            </Route>
        </Router>
   </Provider>,
 document.body.appendChild(document.createElement('div')))

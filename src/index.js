import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {persistStore, autoRehydrate} from 'redux-persist';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyD_hPeZpLGu0D885GLjJUrOBM5uQov91eM",
    authDomain: "react-chat-6db80.firebaseapp.com",
    databaseURL: "https://react-chat-6db80.firebaseio.com",
    projectId: "react-chat-6db80",
    storageBucket: "react-chat-6db80.appspot.com",
    messagingSenderId: "835224929883"
};
firebase.initializeApp(config);



import allReducers from './reducers';

import AppComponent from './components/app.component';
import HomeContainer from './containers/home.container';

import './assets/css/index.css';

const store = createStore(allReducers, undefined, autoRehydrate());

const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppComponent} >
                <IndexRoute component={HomeContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

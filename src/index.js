import 'babel-polyfill';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
// AppContainer is a necessary wrapper component for HMR
import reducers from './reducers';
import { App, About, Menu, RegistrationForm, ReactWithRefs, Track} from './containers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
const history = syncHistoryWithStore(hashHistory, store);
// composeWithDevTools adding __REDUX_DEVTOOLS_EXTENSION__
// to all it inner arguments

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {/* now store has in props of all children components of Provider */}
        <Router history={history}>
          <Route path='/' component={Menu}>
            <IndexRoute component={App}/>
            {/* инициализируем роутер передав ему history
                  чтобы роутинг работал без бэкенда, то есть
            чтобы все url'ы строились через # */}
            {/* дальше мы создаем новый Route, у которого будет
            путь '/' и отрисовывать там компонент Component */}
            <Route path='/registration-form' component={RegistrationForm} />
            <Route path='/react-with-refs' component={ReactWithRefs} />
            <Route path='/about' component={About} />
            <Route path='/tracks/:id' component={Track} />
          </Route>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};
render();

// Hot Module Replacement API
// if(module.hot) {
//   module.hot.accept('./containers/App', () => {
//     render({App});
//   });
//   module.hot.accept('./containers/About', () => {
//     render({About});
//   });
//   module.hot.accept('./containers/RegistrationForm', () => {
//     render({RegistrationForm});
//   });
// }

// import {createStore} from 'redux';
//
// const ADD_TRACK = 'ADD_TRACK';
//
// function playlist(state = [], action) {
//   switch(action.type) {
//     case ADD_TRACK:
//       return [ ...state, action.payload]
//     default:
//       return state;
//   }
// }
// const store = createStore(playlist);
// const addTrackBtn = document.querySelector('.addTrack');
// const trackInput = document.querySelector('.trackInput');
// const list = document.querySelector('.list');
//
// store.subscribe( () => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//     const li = document.createElement('li');
//     li.textContent = track;
//     list.appendChild(li);
//   });
// })
//
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch( { type: ADD_TRACK, payload: trackName});
// });

import React from 'react'
import Page from './components/navig'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './components/reducer'

import {NativeModules} from 'react-native';
NativeModules.ExceptionsManager = null;

const store = createStore(reducer, applyMiddleware(ReduxThunk))


export default class App extends React.Component {
   
    render() {
      return (
        <Provider store={store}>
          <Page />
        </Provider>
      )
    }
}



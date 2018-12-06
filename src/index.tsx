import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { App } from './App'
import './index.scss'
import { pageReducer } from './pagesState/pageReducer'
import * as serviceWorker from './serviceWorker'
import { trainingReducer } from './trainingState/trainingReducer'

const reducer = combineReducers({
  pages: pageReducer,
  training: trainingReducer,
})

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({})))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();
const initialState = {};

const enhancers = (() => {
  if (process.env.NODE_ENV === 'production') {
    return compose(applyMiddleware(routerMiddleware(history), thunk));
  } else {
    return composeWithDevTools(applyMiddleware(routerMiddleware(history)));
  }
})();

export const store = createStore(reducers(history), initialState, enhancers);
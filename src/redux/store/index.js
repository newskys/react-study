import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
const initialState = {};

// 아래로 얘네는 정해져있는거
const enhancers = (() => {
  if (process.env.NODE_ENV === 'production') { // 이렇게 하면은 webpack설정에서 모드_개발되는건지(D) 운영되는건지(P)
    return compose(applyMiddleware(routerMiddleware(history), thunk)); // 미들웨어가 여러개일때 ,로 구분해서 쓸 수 있게 해주는 애
    // thunk _ 원하는 때에 보내게 ( 비동기적으로 작업을 할 수 있게 해주는 라이브러리 )
  } else {
    return composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk)); // 크롬에서 개발망 사용 가능한가_개발과 아닌거 다르게 해줌

  }
})(); 

// 미들웨어 _ 공통적으로 처리하는 부분을 여기서 오버라이드 하거나 할 수 있음
// react router랑 연결해줌 
// 정해진 문법이니 그냥 이렇게 써야 함!



export const store = createStore(reducers(history), initialState, enhancers);
// 미들웨어를 적용하는 부분

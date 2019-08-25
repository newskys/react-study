import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
// 1) provider redux랑 react랑 연결해주는 애!


const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}> 
            <App />
    </Provider>
    
, document.getElementById('root'));
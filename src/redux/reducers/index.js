import {combineReducers} from 'redux';
import count from './count';

const reducers = combineReducers({ // count를 만들어줬으니 count를 넣어줘야 함
    count, 

});

export default reducers;
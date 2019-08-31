import { combineReducers } from 'redux';
import count from './count';
import memberInfo from './memberInfo';

const reducers = combineReducers({
    count,
    memberInfo,
});

export default reducers;
import { combineReducers } from 'redux';
import count from './count';
import member from './member';

const reducers = combineReducers({
    count,
    // member,
});

export default reducers;
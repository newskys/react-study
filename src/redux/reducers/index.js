import { combineReducers } from 'redux';
import count from './count';
import memberInfo from './memberInfo';

const reducers = combineReducers({
    count,memberInfo
    // 코드 추가
});

export default reducers;
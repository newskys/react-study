import { combineReducers } from 'redux';
import count from './count';
import memberInfo from './memberInfo';

const reducers = combineReducers({
    count,
    // 코드 추가
    memberInfo,
});

export default reducers;
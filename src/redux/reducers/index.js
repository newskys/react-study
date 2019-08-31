import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import count from './count';
import memberInfo from './memberInfo';

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    count,
    // 코드 추가
    memberInfo,
});

export default reducers;
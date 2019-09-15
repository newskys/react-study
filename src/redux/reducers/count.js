// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// export const increment = (value) => ({
//     type: INCREMENT,
//     payload: value,
// });
import {createAction , handleActions} from'redux-actions';
export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export const incrementAsync = (value) => (dispatch) => {
    setTimeout(
      () => {
        dispatch(increment(value));
      }, 1000);
};

// export const decrement = (value) => ({
//     type: DECREMENT,
//     payload: value,
// })
const count = handleActions({
    INCREMENT : (state,action)=>({
        count : state.count +action.value
    }),
    DECREMENT : (state,action)=>({
        count : state.count -action.value
    })
},{count:0})

// const initialState = {
//     count: 0,
// }

// const count = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + action.payload,
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - action.payload,
//             }
//         default:
//             return state;
//     }
// }

export default count;
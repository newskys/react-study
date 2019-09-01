const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const incrementAsync = (value) => dispatch => {
    setTimeout(
        () => {
            dispatch(increment(value)); // increment에서도 value를 받았으니까!
        },1000); // thunk가 없으면 여기서 dispatch 못 씀 (1초 후에 dispatch해주라)
}

export const decrement = (value) => ({
    type: DECREMENT,
    payload: value,
})

const initialState = {
    count: 0,
}

const count = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            }
        default:
            return state;
    }
}

export default count;
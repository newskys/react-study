import axios from 'axios';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const incrementAsync = (value) => async (dispatch) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/`);
    dispatch(
        incrementAsync({
            result: result.data(),
        })
    );
    // setTimeout(() => {
    //     dispatch(increment());
    // }, 1000);
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
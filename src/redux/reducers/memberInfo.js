import axios from 'axios';

const SET_MEMBER = 'SET_MEMBER';
const SET_COLOR = 'SET_COLOR';

// Action Creator

export const getMemberInfo = () => async (dispatch) => {
    const res = await axios.get(`https://tuhon.herokuapp.com/reactstudy/member`);

    console.log(res);
    dispatch(setMemberName(res.data.memberName));
    dispatch(setColorName(res.data.colorName));
};

// export const getMemberInfo = () => (dispatch) => {
//     axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
//     .then(
//         res => {
//             console.log(res.data)
//         });
// };

export const setMemberName = (memberName) => ({
    // 코드 추가
    type: SET_MEMBER,
    payload: memberName,
});

export const setColorName = (colorName) => ({
    // 코드 추가
    type: SET_COLOR,
    payload: colorName,
});

const initialState = {
    // 코드 추가
    memberName: '',
    colorName: '',
}

// Reducer
const memberInfo = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMBER:
            return {
                // 코드 추가
                ...state,
                memberName: action.payload,
            }
        
        case SET_COLOR:
            return {
                // 코드 추가
                ...state,
                colorName: action.payload,
            }
        default:
            return state;
    }
}

export default memberInfo;
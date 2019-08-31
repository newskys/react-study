const SET_MEMBER = 'SET_MEMBER';
const SET_COLOR = 'SET_COLOR';

export const setMemberName = (memberName) => ({
    type : SET_MEMBER,
    payload : memberName,
    // 코드 추가
});

export const setColorName = (colorName) => ({
    type : SET_COLOR,
    payload : colorName,
    // 코드 추가
});

const initialState = {
    memberName : 'name',
    colorName : 'color',
    // 코드 추가
}

const memberInfo = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEMBER:
            return {
                ...state,
                memberName : action.payload,
                // 코드 추가
            }
        
        case SET_COLOR:
            return {
                ...state,
                colorName: action.payload,
                // 코드 추가
            }
        default:
            return state;
    }
}

export default memberInfo;
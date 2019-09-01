import axios from 'axios';

const SET_MEMBER = 'SET_MEMBER';
const SET_COLOR = 'SET_COLOR';


// Action Creator

export const getMemberInfo = () => /*async*/ (dispatch) => { // 함수 자체를 async를 만들고 await걸린 시점에서 내부를 sync로 만들자
    /*await*/ axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
    // dispatch(setMemberName(res.data.memberName));
    // dispatch(setColorName(res.data.colorName));

    // async await 쓸려면 npm i -D babel-polyfill 하고 최상위 indes에서 import 'babel-polyfill' 해줘야 함
    
    .then(res =>{
        console.log(res);
        dispatch(setMemberName(res.data.memberName));
        dispatch(setColorName(res.data.colorName));

    })
    // 응답이 도착했을 때 실행
    // .then(res=>{})이 필요 없음 = async await

};

export const setMemberName = (memberName) => ({
    // 코드 추가
    type: SET_MEMBER,
    payload: memberName, //키 값이라 아무 이름써도 됨!
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
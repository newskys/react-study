// action _ 액션의 이름
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creator _ 행동
export const increment = () =>({
    type : INCREMENT,
})

     // function형으로 바꿔보기

export const decrement = () =>({
    
    type : DECREMENT,

})

const initialState = { // null 일 때 들어가는 default 값
    ...state, // map 형식의 state를 풀어주면서 key value를 나타냄
    count : 0, // state 값 아예 교체, 색이 들어있었으면 사라져버림 그래서 해주는게 ...state

}

// reducer 이게 뭐라고,,? 실행 동작,,?
const count = (state = initialState, action) =>{

    switch (action.type){ 

        case INCREMENT:
            return{
                count : state.count+1
                // 값을 직접 변경한 것 아니고 덮어씌워주는 형태
            }

        case DECREMENT:
            return{
                count : state.count-1
            }

        default:
            return state;
    }
}

// 여기까지가 redux를 만드는 하나의 형태

export default count;

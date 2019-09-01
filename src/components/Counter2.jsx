import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, incrementAsync, decrement } from '../redux/reducers/count';
import { getMemberInfo /*, setMemberName, setColorName*/ } from '../redux/reducers/memberInfo';
import axios from 'axios';

// 함수형 컴포넌트는 props랑 state가 없음
// lifecycle 없음 -> didmount이런거 못써여
// 대신에 useEffecf를 씀
const Counter2 =({count, getMemberInfo, incrementAsync, decrement, memberName, colorName}) => {
    useEffect(()=>{
        getMemberInfo(); // 이렇게만 써주면 무한루프 돎 
    }, []); // 어떤 값이 바뀌었을 때 호출하고 싶은지를 []에 적어줌 -> 그래도 무한루프 가능성은 존재함
            // 그래서 빈칸으로 두면 조건이 무조건 false로 걸리기 때문에 한번만 호출하는 효과가 있다 -> didmount와 동일하게 사용 가능

    return(
        <main className="todo-list-template">
        <div className="title">
            WEEK5 과제
        </div>
        <section className="form-wrapper">
            <div className="form">
                <input readOnly={true} value={count} />
                <div className="create-button" onClick={() => incrementAsync(1)}>증가</div>
                <div className="create-button" onClick={() => decrement(1)}>감소</div>
            </div>
            <br/>
            <div className="form">
                <input readOnly={true} value={memberName} />
                <input readOnly={true} value={colorName} />
            </div>
        </section>
    </main>
    )
};

export default connect(
    (state) => ({
        count: state.count.count, // state(redux 전체 스토어) 내의 count 라는 이름의 스토어(count.js) 내의 count 값
        memberName: state.memberInfo.memberName,
        colorName: state.memberInfo.colorName,
    }),
    {
        increment,
        incrementAsync,
        decrement,
        getMemberInfo,
        /*setMemberName,
        setColorName,*/
    },
)(Counter2);
import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../redux/reducers/count';
import { setMemberName, setColorName } from '../redux/reducers/memberInfo';
import axios from 'axios';

class Counter extends React.Component {
    componentDidMount() {
        // const {setMemberName, setColorName } = this.props; // 해당 방법도 사용 가능
        axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
        .then(res => {
            console.log(res.data);
            this.props.setMemberName(res.data.memberName);
            this.props.setColorName(res.data.colorName);
            // props 함수가 아닌 기본 함수(setMemberName()) 호출 시 js파일 내 해당 함수만 실행되고 이후 action은 실행 안 됨
            // redux는 모두 props로 구성, 따라서 해당 함수를 호출해야 함
        });
    }

    render() {
        const { count, incrementAsync, decrement, memberName, colorName } = this.props;

        return (
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
    }
}

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
        setMemberName,
        setColorName,
    },
)(Counter);
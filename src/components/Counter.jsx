import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, decrement } from '../redux/reducers/count';
import axios from 'axios';
import  { setMemberName, setColorName } from '../redux/reducers/memberInfo';


class Counter extends React.Component {
    componentDidMount() {
         const { setMemberName, setColorName } = this.props;
        axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
        .then(res => {
            console.log(res.data);
            setMemberName(res.data.memberName);
            setColorName(res.data.colorName);
        });
        //count.js에있는 것드릉ㄴ...
    }

    render() {
        const { count, increment, decrement ,memberName,colorName} = this.props;

        return (
            <main className="todo-list-template">
                <div className="title">
                    WEEK5 과제
                </div>
                <section className="form-wrapper">
                    <div className="form">
                        <input readOnly={true} value={count} />
                        <div className="create-button" onClick={() => increment(1)}>증가</div>
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
        count: state.count.count,
         // state(redux 전체 스토어) 내의 count 라는 이름의 스토어(count.js) 내의 count 값
         memberName : state.memberInfo.memberName,
         colorName: state.memberInfo.colorName,

    }),
    {
        increment,
        decrement,
        setColorName,
        setMemberName,
    },
)(Counter);
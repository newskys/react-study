import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, decrement } from '../redux/reducers/count';
import axios from 'axios';

class Counter extends React.Component {
    componentDidMount() {
        axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
        .then(res => {
            console.log(res.data);
            // setMemberName(파라미터);
            // setMemberColorName(파라미터);
        });
    }

    render() {
        const { count, increment, decrement } = this.props;

        // console.log('count', count.count);
        return (
            <main className="todo-list-template">
                <div className="title">
                    WEEK5 과제
                </div>
                <section className="form-wrapper">
                    <div className="form">
                        <input readOnly={true} value={count.count} />
                        <div className="create-button" onClick={() => increment(1)}>증가</div>
                        <div className="create-button" onClick={() => decrement(1)}>감소</div>
                    </div>
                    <br/>
                    <div className="form">
                        <input readOnly={true} value={'멤버이름'} />
                        <input readOnly={true} value={'색깔'} />
                    </div>
                </section>
            </main>
        )
    }
}

export default connect(
    (state) => ({
        count: state.count,
    }),
    {
        increment,
        decrement,
    },
)(Counter);
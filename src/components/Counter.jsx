import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, decrement ,incrementAsync} from '../redux/reducers/count';
import { getMemberInfo } from '../redux/reducers/memberInfo';


class Counter extends React.Component {
    memberNameRef = React.createRef();

    componentDidMount() {
        const { getMemberInfo } = this.props;
        getMemberInfo();
    }

    componentDidUpdate() {
        const memberNameRef = this.memberNameRef.current;
       // memberNameRef.
        // console.log(this.memberNameRef.current);
    }

    render() {
        const { count, increment, incrementAsync, decrement, memberName, colorName } = this.props;

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
                        <input ref={this.memberNameRef} readOnly={true} value={memberName} />
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
        incrementAsync,
        decrement,
        getMemberInfo,
    },
)(Counter);
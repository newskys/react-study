import React from 'react';
import './Counter.css';
import {connect} from 'react-redux';
import {increment, decrement} from '../redux/reducers/count'

class Counter extends React.Component {
    componentDidMount() {
    }

    render() {

        const {count, increment, decrement} = this.props;
        console.log('count',count);

        return (
            <main className="todo-list-template">
                <div className="title">
                    Redux 카운터
                </div>
                <section className="form-wrapper">
                    <div className="form">
                        <input readOnly={true} value={count.count} />
                        <div className="create-button" onClick={increment}>증가</div>
                        <div className="create-button" onClick={decrement}>감소</div>
                    </div>
                </section>
            </main>
        )
    }
}

// const mapSatateToProps = (state) => ({
//     count : state.count, 
// })

// const mapDispatchToProps = (dispatch) => ({
//     increment : () => dispatch(increment()), // 실행될 때는 무조건 dispatch로 (실행 요청)
//     decrement : () => dispatch(decrement()),
// })

export default connect( // redux랑 연결시켜주는 애 -> import 필요
    // mapSatateToProps,
    (state) => ({
        count : state.count, 
    }),
    // mapDispatchToProps,
    {
        increment,
        decrement
    }
)(Counter);
import React from 'react';
import './Counter.css';

import { connect } from 'react-redux';
import { increment, decrement } from '../redux/reducers/count';

class Counter extends React.Component {
    componentDidMount() {
    }

    render() {
        const { count, increment, decrement } = this.props;
        console.log('count', count.count);
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

const mapStateToProps = (state) => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

// export default connect(
//     (state) => ({
//         count: state.count,
//     }),
//     {
//         increment,
//         decrement,
//     },
// )(Counter);
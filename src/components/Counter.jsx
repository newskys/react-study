import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <main className="todo-list-template">
                <div className="title">
                    Redux 카운터
                </div>
                <section className="form-wrapper">
                    <div className="form">
                        <input readOnly={true} value={0} />
                        <div className="create-button">증가</div>
                        <div className="create-button">감소</div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Counter;
import React, { Component } from 'react';
import './TodoItem.css';
import axios from 'axios';
import { increment, decrement } from '../redux/reducers/count';
import { connect } from 'react-redux';

class TodoItem extends Component {
    handleRemove = (id) => {
        const { increment, count } = this.props;

        increment();
        // removeTodo();
        // // 삭제 API
        // axios.delete(`https://tuhon.herokuapp.com/reactstudy/kyusik/todo/${id}`)
        // .then(res => console.log(res));
    };

    render() {
        const { text, id, count } = this.props;
        console.log(count);

        return (
        <div className="todo-item">
            <div className="remove" 
                onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    this.handleRemove(id);
                }}>
                &times;
            </div>
            <div className={`todo-text`}>
            <div>{text}</div>
            </div>
            {/* {
            checked && (<div className="check-mark">✓</div>)
            } */}
        </div>
        );
    }
}

export default TodoItem;
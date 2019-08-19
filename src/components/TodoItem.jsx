import React, { Component } from 'react';
import './TodoItem.css';
import axios from 'axios';

class TodoItem extends Component {
    handleRemove = (id) => {
        const { removeTodo } = this.props;

        removeTodo();
        // // 삭제 API
        // axios.delete(`https://tuhon.herokuapp.com/reactstudy/kyusik/todo/${id}`)
        // .then(res => console.log(res));
    };

    render() {
        const { text, id } = this.props;
        console.log(id);

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
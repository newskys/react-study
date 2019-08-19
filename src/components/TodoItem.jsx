import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text } = this.props;

        return (
        <div className="todo-item">
            <div className={`todo-text`}>
            <div>{text}</div>
            </div>
        </div>
        );
    }
}

export default TodoItem;
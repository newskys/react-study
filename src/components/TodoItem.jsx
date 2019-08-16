import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    handleRemove = (e) => {
        // 삭제 API
    };

    render() {
        const { text, id } = this.props;

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
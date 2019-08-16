import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                {list.map((item, index) => <TodoItem text={''} />)}
            </div>
        );
    }
}

export default TodoItemList;
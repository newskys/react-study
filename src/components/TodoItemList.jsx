import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                {list.map((item, index) => <TodoItem key={`todoitem-${index}`} text={item.todo} />)}
            </div>
        );
    }
}

export default TodoItemList;
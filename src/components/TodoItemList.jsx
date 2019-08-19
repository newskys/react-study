import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { list, removeTodo } = this.props;
        console.log('list', list);

        return (
            <div>
                {list.map((item, index) => <TodoItem key={`todoitem-${index}`} text={item.todo} removeTodo={removeTodo} />)}
            </div>
        );
    }
}

export default TodoItemList;
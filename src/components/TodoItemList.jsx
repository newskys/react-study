import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                {list.map((item, index) => <TodoItem key={`todoitem-${index}`} text={item.todo}/>)//id도 같이 넘겨줘야함, 삭제할 때 사용!(key값임)
                }
            </div>
        );
    }
}

export default TodoItemList;
import React from 'react';
import './TodoList.css';
import Form from './Form';
import TodoItemList from './TodoItemList';
import axios from 'axios';

class TodoList extends React.Component {
    state = {
        list: [],
    };

    render() {
        const { list } = this.state;
        console.log('list', list);

        return (
            <main className="todo-list-template">
                <div className="title">
                    의 오늘 할 일
                </div>
                <section className="todos-wrapper">
                    <TodoItemList list={list} />
                </section>
            </main>
        )
    }
}

export default TodoList;
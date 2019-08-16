import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

    render() {
        return (
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                <section className="form-wrapper">
                    {/* {form} */}
                </section>
                <section className="todos-wrapper">
                    {/* { children } */}
                </section>
            </main>
        )
    }
}

export default TodoList;
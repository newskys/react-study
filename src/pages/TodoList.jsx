import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {
    state = {
        todos: null,
    };

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            console.log(res.data);
            this.setState({
            todos: res.data,
            });
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <>
                {todos && (
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">TODO LIST</th>
                            </tr>
                        </thead>
                        <tbody>
                        {todos.map(item =>
                            <tr key={`todo-${item.id}`}>
                                <th>{item.id}</th>
                                <td>{item.title}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                )}

                {!todos && (        
                        <div>Loading...</div>
                )}          
            </>
        )
    }
}

export default TodoList;
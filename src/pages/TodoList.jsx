import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Todo from './Todo';


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
                                <td><Link to={`/todos/${item.id}`}>{item.title}</Link></td> 
                                {/* 이 부분에 Todo 페이지로 넘기는 코드 사용 */}
                             
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
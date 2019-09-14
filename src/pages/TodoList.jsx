import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withRequest from './withRequest'; // import hoc

class TodoList extends React.Component {
    // state = {
    //     todos: null,
    // };

    // componentDidMount() {
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/todos')
    //     .then((res) => {
    //         console.log(res.data);
    //         this.setState({
    //         todos: res.data,
    //         });
    //     });
    // }

    render() {
        const { data } = this.props; // 변수명 data로 변경, this.props

        return (
            <>
                {data && ( // todos -> data
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">TODO LIST</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => // todos.map -> data.map
                            <tr key={`todo-${index}`}>
                                <th>{item.id}</th>
                                <td><Link to={`/todos/${item.id}`}>{item.title}</Link></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                )}

                {!data && ( // todos -> data       
                        <div>Loading...</div>
                )}          
            </>
        )
    }
}

// export default TodoList;
export default withRequest('https://jsonplaceholder.typicode.com/todos')(TodoList);
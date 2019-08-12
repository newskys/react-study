import React from 'react';
import axios from 'axios';

// TodoList.jsx에서 아이템 클릭할 경우 이 컴포넌트로 들어오게 하기
class Todo extends React.Component {
    state = {
        todo: null,
    };

    componentDidMount() {
        const { match } = this.props;

        axios.get(`https://jsonplaceholder.typicode.com/todos/${match.params.todo}`)
        .then((res) => {
            console.log(res);
            this.setState({
                todo: res.data,
            })
        });

        console.log(match.params.todo); // url에 /todos/1 이라고 치고 들어오면 1 이라는 값이 찍힘
    }

    render() {
        const { todo } = this.state;

        return (
            <>
                {todo && (
                    <>
                        <div>{todo.title}</div>
                    </>
                )}
            </>
        )
    }
}

export default Todo;
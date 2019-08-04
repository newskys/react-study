import React from 'react';

// TodoList.jsx에서 아이템 클릭할 경우 이 컴포넌트로 들어오게 해야 함
class Todo extends React.Component {
    componentDidMount() {
        const { match } = this.props;

        console.log(match.params.todo); // url에 /todos/1 이라고 치고 들어오면 1 이라는 값이 출력됨
    }

    render() {
        const { match } = this.props;

        return (
            <>
                {match.params.todo}
            </>
        )
    }
}

export default Todo;
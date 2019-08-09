import React from 'react';
import axios from 'axios';

// TodoList.jsx에서 아이템 클릭할 경우 이 컴포넌트로 들어오게 해야 함
class Todo extends React.Component {
    componentDidMount() {
        const { match } = this.props;

        console.log(match.params.todo);
         // url에 /todos/1 이라고 치고 들어오면 1 이라는 값이 출력됨
         axios.get('https://jsonplaceholder.typicode.com/todos/${match.params.todo}')
         .then((res)=>{
             console.log(res.data.title)
             this.setState({
                 data:res.data,
             });
             console.log(res.data);
         });





        // 이 부분에 AJAX 통신 추가
    }

    render() {
        const { match } = this.props;

        return (
            <>
                {match.params.todo}
                
                {/* AJAX 통신으로 받아온 데이터를 보여주는 코드 추가 */
                data && <>{data.title}</>
                
                }
            </>
        )
    }
}

export default Todo;
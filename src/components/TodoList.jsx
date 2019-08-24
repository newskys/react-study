import React from 'react';
import './TodoList.css';
import Form from './Form';
import TodoItemList from './TodoItemList';
import axios from 'axios';

class TodoList extends React.Component {
    state = {
        list: [],
    };

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        // Ajax로 가져온 데이터를 list state에 넣음

        
        axios
         .get(`https://tuhon.herokuapp.com/reactstudy/yujeong/todo`)
         .then((res)=>{
            this.setState({
                list : res.data // 왜 왜 괄호를 넣으면 안되는거지?
                // res.data가 리스트 속 하나의 원소가 아니라, res.data를 하나 하나 문자 배열로 넣는건가!??
                // 그럼 할 일 하나당 리스트 하나, 원소는 철자 수 만큼??
                // 만약에 오늘의 할일을 3개를 입력하잖아요 그러면 리스트가 [할일1, 할일2, 할일3] 이건지 [할,일,3] 이렇게인지!?
            })

        })


    }

    submitTodo = (todoName) => {
        // Ajax로 todoName 값을 DB에 넣음
        // axios.post(주소, {todo: 할일내용})
        axios
            .post(`https://tuhon.herokuapp.com/reactstudy/yujeong/todo`,{todo: todoName}) 
            // {todoName} 아니고 todoName!

            // 이후 리스트 다시 가져옴
            //.then((res) =>this.getList());
            // 왜 res를 쓰면 회색이지?

            this.getList();
    }

    render() {
        const { list } = this.state;

        console.log(list)

        return (
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                <section className="form-wrapper">
                    <Form submitTodo={this.submitTodo} />
                </section>
                <section className="todos-wrapper">
                    <TodoItemList list={list} />
                </section>
            </main>
        )
    }
}

export default TodoList;
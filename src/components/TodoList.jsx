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
                list : res.data 
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
import React from 'react';
import './TodoList.css';
import Form from './Form';
import TodoItemList from './TodoItemList';
import axios from 'axios';

class TodoList extends React.Component {
    state = {
        list: [],
        name: null
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.name !== this.state.name ||
            nextState.list.length !== this.state.list.length;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name) {
            axios.get(`https://tuhon.herokuapp.com/reactstudy/${this.state.name}/todo`)
                .then((res) => {
                    console.log('member_data', res.data);
    
                    this.setState({
                        list: res.data
                    })
                });
        }
    }

    componentDidMount() {
        // 멤버 이름 가져오기
        axios.get(`https://tuhon.herokuapp.com/reactstudy/member`)
        .then((res) => {
            console.log('member_name', res.data.memberName);

            this.setState({
                name: res.data.memberName
            })

            // 해당 멤버의 데이터 가져오기
            
        });
    }

    render() {
        const { list, name } = this.state;
        console.log('list', list);

        return (
            <main className="todo-list-template">
                <div className="title">
                    {name}의 오늘 할 일
                </div>
                <section className="todos-wrapper">
                    <TodoItemList list={list} />
                </section>
            </main>
        )
    }
}

export default TodoList;
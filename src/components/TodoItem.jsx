import React, { Component } from 'react';
import './TodoItem.css';
import axios from 'axios';
class TodoItem extends Component {
    handleRemove = (e) => {
        // 삭제 API
        axios
         .delete(`https://tuhon.herokuapp.com/reactstudy/yujeong/todo/${id}`)
         // 왜 그냥 id라고만 해도 되는거지?

         // 삭제하고 다시 list를 띄워야 보여지지 않음
         // todolist를 변경해야함!
         // todoitem이 삭제로직을 가지고있음
         // removetodo를 todolist에 만들고 submittodo처럼 전송해줌
         // 그러면 필요없는 애가 많아짐 (누군지 잘 생각해보기)
         // 
    };

    render() {
        const { text, id } = this.props;

        return (
        <div className="todo-item">
            <div className="remove" 
                onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    this.handleRemove(id);
                }}>
                &times;
            </div>
            <div className={`todo-text`}>
            <div>{text}</div>
            </div>
            {/* {
            checked && (<div className="check-mark">✓</div>)
            } */} 
        </div>
        );
    }
}

export default TodoItem;
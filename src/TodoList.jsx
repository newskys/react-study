import React from 'react';

class TodoList extends React.Component{
    render(){
        console.log(this.props.list);
        return(
            <>
            {this.props.list.map(item => <div>{item}</div>)} 
            </>
        )// map -> 내부에서의 반복문
        //괄호 속의 것 ->item : 반복문 속의 하나하나 아이템 {}
    }
}

export default TodoList;
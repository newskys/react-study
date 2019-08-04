import React from 'react';

class TodoList extends React.Component{
    render(){
       console.log(this.props.list); //props에서 list로 받아오는 콘솔로그
        return(
            <>
            {this.props.list && this.props.list.map(item => <div>{item}</div>)}
            </>
        )
    }
}

export default TodoList;

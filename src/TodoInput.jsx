import React from 'react';
class TodoInput extends React.Component{
//state초기값 셋팅
state = {
    todo : '',//key벨류값
    
};
    handleKeyUp =(e)=>{
        //state초기값을 바꿔줘야함
        this.setState({
            todo : e.target.value,
        });
        
        //동기비동기 이해가 안감
    }
handleBuutonClick=()=>{
console.log('버튼 클릭됨');
this.props.addToList(this.state.todo)
};
render(){
    //잘들어가있나 확인하느 용도
    console.log('todo',this.state.todo);
  
    return(
        <>
            <input type ="text" onKeyUp={this.handleKeyUp} />
            <button type="button" onClick={this.handleBuutonClick}>추가</button>
        </>
    )
}
}
export default TodoInput;

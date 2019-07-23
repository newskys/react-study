import React from 'react';


class TodoInput extends React.Component{

state = { // map 형식 
    todo:'', // key value. -> 여러개를 쓸 수도 있다!
}; // 이제부터 쓸거니까 선언!

    handleKeyUp =(e)=>{
        this.setState({
            todo: e.target.value,
        }); // state를 set해주는 애
    }

    handleButtonClick= () =>{
        console.log('버튼 클릭됨');
        this.props.addToList(this.state.todo); // 받아올 값
    }

    render(){
        console.log('todo',this.state.todo); //이게 위로 올ㄹ라갈땐 callback으로 써야 함!
        return( // return 에 아무것도 안해주면 밑줄! ;은 상관없음
            <>
                <input type="text" onKeyUp={this.handleKeyUp}/> 
                <button type="button" onClick={this.handleButtonClick}>버튼</button>
            </>
        )
    }
}

export default TodoInput;
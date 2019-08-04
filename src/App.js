import React from 'react';//대문자 확인~!
import TodoInput from './TodoInput'; //얘 적어줘야함
import TodoList from './TodoList';

class App extends React.Component{
  //리액트 라이브러리안에 component상속받아서 사용
state ={
  list : [],//[]는 빈 배열 ,{ }빈맵
};


addToList =(item) =>{//함수로 넘겨줘서 item을 꺼내옴
console.log('item',item);
this.setState({
//state는 수정이안됨
//123이라는 숫자가 들어가있는 상태에서 4만 넣어주기가 안되고 새로운 리스트를 만들어야함
list :[...this.state.list,item],
//기존에있는 배열을 해쳐서 마지막 아이템을 넣고 다시 묶음

}, ()=>console.log(this.state.list));
//디버깅용도
};
  render(){//리턴되눈 애를 보여주는 랜더함수
    return(
      //jsx만든거 실제로 사용할라면 app.js에서 
      <>
      <TodoInput addToList={this.addToList}/>
      <TodoList list={this.state.list} />
      </>
    )
  }//creat react app에 탑재되어있음 --> 수정하면 새로고침안해도 바로 수정됌!
}
export default App;//eX6문법
//import app쓰면 class app호출
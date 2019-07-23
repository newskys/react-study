import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component{ // react 라이브러리 안에 component를 상속받아서 만들겠따
  
  state={ // state는 수정이 안됨, 무조건 갈아 치워줘야 해! 새로운 리스트를 만들어야 함
    list:[], // [] : 빈 배열 {} : 빈 맵
  };

  addToList=(item) => {
    console.log('item',item); // 여기 잘 이해!!!!!!!!!!!!!!!!
    this.setState({
      list: [...this.state.list,item], //...~ :배열 풀어 쓰는 것 
    }/*,() => console.log(this.state.list)*/); // debug용 잘 들어가는지 확인하기
  };

  render(){
  
    return( // render눈 무조건 return 필요
      <>
        <TodoInput addToList={this.addToList}/> 
        <TodoList list = {this.state.list}/>
      </>
    );
  }

}

// ctrl+/ -> 전체주석!

export default App;
// app 을 쓰면 위의 것이 연결되게 해주는 애
// 그냥 문법  이걸 해줘야 index의 
// ReactDOM.render(<App />, document.getElementById('root'));
// 를 쓸 수 있씀 
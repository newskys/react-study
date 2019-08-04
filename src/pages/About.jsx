import React from 'react';
import axios from 'axios'; // npm i axios -> api 랑 통신하는 라이브러리

class About extends React.Component{
    state = { // component가 unmount 될 때 까지 계속 있음 data1,data2 예시 기억해보기
        data :null,
    }
    componentDidMount(){
        axios // 비동기는 순차적으로 실행되지 않음 //
            .get('https://jsonplaceholder.typicode.com/todos/1') // 서버랑 미리 맞춰둬야함! //axios.get을 저렇게 써도 됨!
            .then((res) => {
                this.setState({
                    data:res.data,
                });
            }); 
            
            // data만 있으면 되니까 .data
            // 근데 나는 쟤를 보여주고 싶어! -> rendering 시기
            //function(res){
            //    console.log(res)
            //}  --> 위와 동일
    }
    render(){ // 화면 새로고침
        const{data} = this.state;
        console.log('성공')
        return(
            <>
            ABout~
           <br/>
           {data&&( // if 의 간단 버전 (data가 있으면 실행, 없으면 실행ㄴ)
               <ul>
                   <li>{data.userId}</li>
                   <li>{data.id}</li>
                   <li>{data.title}</li>

               </ul>
           )}
            </>
        )
    }
}

export default About;
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default class App extends React.Component {
    render() {
        return ( // 경로가 정확히 일치할 땐 exact 
            // switch에서 about에서 home이 뜨는 이유 -> break가 home에서 걸려버림
            // exact를 붙이거나 위치를 변경
            <BrowserRouter>
            <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/" component={Home}></Route> 

            </Switch>
                
            </BrowserRouter>  
        )
    }
}
import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    render(){ 
        return(
            <ul>
            <li><Link to="/about">about ㄱ</Link></li>
            </ul>

        )
    }
}

export default Home;
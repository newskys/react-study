import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/todos">TODO LIST</Link></li>
                <li><Link to="/posts">POST LIST</Link></li>
            </ul>
        )
    }
}

export default Home;
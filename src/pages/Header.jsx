import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <>
            <ul>
                <li><Link to={`/`}>home</Link></li>
                <li><Link to={`/about`}>about</Link></li>
           </ul>
            </>
        )
    }
}

export default Header;
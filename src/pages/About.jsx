import React from 'react';
import axios from 'axios';
import Header from './Header';

class About extends React.Component {
    componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((res) => console.log(res));
    }

    render() {
        return (
            <div>
                <Header />
                name param: {this.props.match.params.name}
            </div>
        )
    }
}

export default About;
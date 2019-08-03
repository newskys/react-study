import React from 'react';
import axios from 'axios';
import Header from './Header';

class About extends React.Component {
    state = {
        data: '',
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => this.setState({ data: res.data, }))
        .catch(err => console.log(err));
    }

    render() {
        console.log('{this.state.data}', this.state.data);
        return (
            <div>
                <Header />
                name param: {this.props.match.params.name}
                
            </div>
        )
    }
}

export default About;
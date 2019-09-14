import React, { Component } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponent) => {
    return class extends Component {

        state = {
            data: null
        }

        componentDidMount() {
            axios
                .get(url)
                .then((res) => {
                    this.setState({
                        data: res.data.slice(0, 10),
                    });
                });
        }

        render() {
            const { data } = this.state;
            return (
                <WrappedComponent {...this.props} data={data} />
            )
        }
    }
}

export default withRequest;
import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
    state = {
        images: null,
    };

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log(res.data);
            this.setState({
                images: res.data,
            });
        });
    }

    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h3>글 목록</h3>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{ width:"100%" }}/>
                            <div style={{ textAlign: "center" }}>
                                contents
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PostList;
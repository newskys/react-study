import React from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import TopButton from './TopButton';

class PostList extends React.Component {
    state = {
        images: null,
    };

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log(res.data.slice(0, 10));
            this.setState({
                images: res.data.slice(0, 10),
            });
        });
    }

    render() {
        const { images } = this.state;

        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h3 ref ={(ref)=>this.h3=ref}>글 목록</h3>
                </div>

                <div className="container-fluid">
                {images && images.map((item, index) =>
                    <PostItem key={`postitem-${index}`} item={item} />
                )}
                </div>
                <TopButton />
            </>
        )
    }
}

export default PostList;
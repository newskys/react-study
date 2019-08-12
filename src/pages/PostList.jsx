import React from 'react';
import axios from 'axios';
import PostItem from './PostItem';

class PostList extends React.Component {
    state = {
        images: null,
    };

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log(res.data.slice(0,10));
            this.setState({
                images: res.data.slice(0,10),
            });
        });
    }

    render() {
        const {images} = this.state;
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h3>글 목록</h3>
                </div>


                <div className="container-fluid">
                    {images&&images.map((item,index)=>
                        <PostItem {...{item, index}}/>
                        //item = {item} index = {index}
                        // 여기서 정보가 끊기니까 정보를 넘겨주자! 
                    )}
                </div>
            </>
        )
    }
}

export default PostList;
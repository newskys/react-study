import React from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import TopButton from './TopButton';
import withRequest from './withRequest'; // import hoc

class PostList extends React.Component {
    // state = {
    //     images: null,
    // };

    // componentDidMount() {
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/photos')
    //     .then((res) => {
    //         console.log(res.data.slice(0, 10));
    //         this.setState({
    //             images: res.data.slice(0, 10),
    //         });
    //     });
    // }

    render() {
        // const { images } = this.state;
        const { data } = this.props; // 변수명 data로 변경, this.props

        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h3>글 목록</h3>
                </div>

                <div className="container-fluid">
                {data && data.map((item, index) => // images -> data로 변경
                    <PostItem key={`postitem-${index}`} item={item} />
                )}
                </div>
                <TopButton />
            </>
        )
    }
}

// export default PostList;
export default withRequest('https://jsonplaceholder.typicode.com/photos')(PostList);
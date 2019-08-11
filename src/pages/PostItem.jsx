import React from 'react';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';

class PostItem extends React.Component {
    render() {
        const { item } = this.props;

        return (
            <div className="row">
            <div className={"col-xs-12"}>
                <img className="img-rounded" src={item.thumbnailUrl} style={{ width:"100%" }}/>
                <p className="text-right">
                    <LikeButton />
                    <CommentButton />
                </p>
                
            </div>
        </div>
        )
    }
}

export default PostItem;
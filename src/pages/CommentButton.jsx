import React from 'react';

class CommentButton extends React.Component {
    render() {
        return (
            <button className="text-right" type="button" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-comment" aria-hidden="true"> 23</span>
            </button>
        )
    }
}

export default CommentButton;
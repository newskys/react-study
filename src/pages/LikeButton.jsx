import React from 'react';

class LikeButton extends React.Component {
    state = {
        isLike: false,
        likeCount: 0,
    };

    handleClick = () => {
        this.setState({
            isLike : !this.state.isLike,

        })

        console.log(this.state)

    }

    render() {
        let lc = this.state.isLike? 1:0
        let cn = this.state.isLike? `glyphicon glyphicon-heart` : `glyphicon glyphicon-heart-empty`
        return (
    <>
            <button className="text-right" type="button" className="btn btn-default btn-lg" onClick={this.handleClick} >
                <span className={cn} aria-hidden="true"  > {lc}</span>
            </button>

    </>
    )
       
    }


}

export default LikeButton;
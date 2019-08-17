import React from 'react';

class LikeButton extends React.Component {
    state = {
        isLike: false,
        likeCount: 0,
    };

    handleClick = () => {
        // 클릭했을 때 코드 작성 (AJAX 같은 거 사용하지 않고 그냥 state만 사용해서 작성)
        
        /*isLike ? handleClicka():*/
        this.setState({
            isLike : !this.state.isLike,
            likeCount :this.state.likeCount?0:1,
            //왜 저는  likeCount : !this.state.likeCount이게 안될까요?

        })
        
    }
    /*handleClicka = () =>{
        this.setState({
            isLike : false,
            likeCount :0,
        });
    } 이렇게 하는건 왜 안될까요 ㅠㅠ*/
    render() {
        const { isLike, likeCount } = this.state;

        return (
            <button className="text-right" type="button" className="btn btn-default btn-lg" onClick={this.handleClick}>

                {/*
                    좋아요 안 했을 때(기본) className은 glyphicon glyphicon-heart-empty
                    좋아요 했을 때 className은 glyphicon glyphicon-heart
                 */
                isLike ? <span className={`glyphicon glyphicon-heart`} aria-hidden="true"> {likeCount}</span> :
                <span className={`glyphicon glyphicon-heart-empty`} aria-hidden="true"> {likeCount}</span>
                }
            </button>
        )
    }
}

export default LikeButton;
import React from 'react';

class PostItem extends React.Component {
    render() {
        // index 선언을 해줘야 함!
        //여기서는 받아와야 하므로 props를 사용

        const{item,index} = this.props; // this!!

        // const item = this.props.item; 
        //const index = this.props.index; 와 동일함
        // 순서 상관 없고 이름에 따라서 가져감

        return (
            <>
              <div key = {`images-${index}`}> 
                    <div className="row">
                        <div className="col-xs-12">
                            <img className="img-rounded" src={`${item.thumbnailUrl}`} style={{ width:"100%" }}/>
                            <div style={{ textAlign: "center" }}>
                                {item.title}
                            </div>
                        </div>
                    </div>
                    </div>
            </>
        )
    }
}

export default PostItem;
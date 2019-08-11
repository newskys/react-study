import React from 'react';

class PostItem extends React.Component {
    render() {
        const { item, index } = this.props;

        return (
            <div key={`images-${index}`} className="row">
            <div className={"col-xs-12"}>
                <img className="img-rounded" src={item.thumbnailUrl} style={{ width:"100%" }}/>
                <div style={{ textAlign: "center" }}>
                    {item.title}
                </div>
            </div>
        </div>
        )
    }
}

export default PostItem;
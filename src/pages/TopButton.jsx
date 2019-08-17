import React from 'react';

class TopButton extends React.Component {
    handleClick = () => {
        window.scrollTo(0,0);
    };

    render() {
        return (
            <p className="text-right" style={{ position: 'fixed', bottom: '10px', right:'10px' }}>
                <button className="text-right" type="button" className="btn btn-default btn-lg" onClick={this.handleClick}>
                    <span className="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                </button>
            </p>
        )
    }
}

export default TopButton;
import React from 'react';

class TopButton extends React.Component {
    state = {
        toggle: false,
    };

    handleClick = () => {
        // 클릭했을 때 코드 작성
        // const { toggle } = this.state;

        // if (toggle) {
        //     this.setState({
        //         toggle: false
        //     })
        // }
        // else {
        //     this.setState({
        //         toggle: true
        //     })
        // }

        window.location.reload(); // 도저히 새로고침 없이 최상단 이동 방법을 모르겟듬...
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
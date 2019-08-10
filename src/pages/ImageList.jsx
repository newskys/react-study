import React from 'react';
import axios from 'axios';

class ImageList extends React.Component {
    state = {
        images: null,
    };

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log(res.data);
            this.setState({
                images: res.data,
            });
        });
    }

    render() {
        return (
            <>
                <div className="container-fluid" style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px'}}>
                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: '30px'}}>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                        <div className="col-xs-6">
                            <img className="img-rounded" src="https://via.placeholder.com/150/92c952" style={{width:'100%'}}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ImageList;
import React from 'react';
import './Form.css';

class Form extends React.Component {
    state = {
        value: '',
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    };

    handleClick = (e) => {
        const { submitTodo } = this.props;
        const { value } = this.state;
        
        submitTodo(value);
    };

    render() {
        const { value } = this.state;

        return (
            <div className="form">
                <input value={value} onChange={(e) => this.handleChange(e)} />
                <div className="create-button" onClick={(e) => this.handleClick(e)}>추가</div>
            </div>
        )
    }
}

export default Form;
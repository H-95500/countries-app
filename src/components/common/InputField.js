import React, { Component } from 'react';
import MockContent from '../../mock/countryRegionMock'

class TodoInput extends Component {
    render() {
        return (
            <input className={this.props.className}
             onChange={this.props.handleOnChange}
                type="text"
                placeholder={this.props.placeholder}
                required
                defaultValue={this.props.defaultValue}
                value={this.props.value} />
        );
    }
}
TodoInput.defaultProps = {Content:MockContent}
export default TodoInput

import React, { Component } from 'react';
import MockContent from '../../mock/countryRegionMock'

class Button extends Component {
    render() {
        console.log(this.props)
        return (
            <button
                onClick={this.props.onClick}> 
                {this.props.value}
            </button>

        );
    }
}
Button.defaultProps = {Content:MockContent}
export default Button
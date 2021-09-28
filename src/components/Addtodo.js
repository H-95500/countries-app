import React from 'react';
// import { Button } from 'react-bootstrap';
import MockContent from '../mock/countryRegionMock';
import Button from './common/Buttons'
import TodoInput from './common/InputField'
import '../styles/App.css'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInputItem: ''
    }
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleOnCreate(e) {
    e.preventDefault();
    const newItem = this.state.newInputItem;
    if (newItem !== '') {
      console.log(this.state.newInputItem)
      this.props.addItem(this.state.newInputItem)
      this.setState({
        newInputItem: ''
      });
    }
  }

  handleOnChange(e) {
    this.setState({
      newInputItem: e.target.value
    })
  }

  render() {
    return (
      <div className="textField">
       <TodoInput className="addItem"
          type="text" 
          placeholder={this.props.Content.placeholder}
          value= {this.state.newInputItem}
          handleOnChange={(e) => { this.handleOnChange(e) }} />
        <Button value={this.props.Content.addButton}
          onClick={(e) => { this.handleOnCreate(e) }} />
      </div>

    );
  }
}

AddTodo.defaultProps = {
  Content: MockContent
};

export default AddTodo;

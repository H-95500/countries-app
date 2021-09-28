  
import React from 'react';
import styles from '../styles/App.css'
import AddTodo from './Addtodo'
import TodoList from './List'
import MockContent from '../mock/countryRegionMock'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
}
  addItem(item) {
    this.state.data.unshift({
      task: item
    });
    this.setState({
      data: this.state.data
    });
  }

  findItem(item) {
     return this.state.data.find((element) => element.task === item) //returns object
    }
  
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);  
    selectedItem.task = newItem;
    this.setState({
       data: this.state.data });
       
  }
  
  deleteItem(key) {
    const filteredItems = this.state.data.filter(item =>
      item.task !== key);
    this.setState({
      data: filteredItems
    })
  }


  render() {
    return (
      <div className= {styles.widget}>
        <div className="header">
          <h1> {this.props.Content.mainheading}</h1>
          <br />
          <h4>{this.props.Content.text}</h4>
        </div>
        <AddTodo data={this.state.data} addItem={this.addItem} />
        <br />
        <br />
        <h5> {this.props.Content.sub}</h5>
        <TodoList data={this.state.data} deleteItem={this.deleteItem} saveItem={this.saveItem}/>
      </div>
    );
  }
}
 
TodoApp.defaultProps = {
  Content: MockContent
};
export default TodoApp;

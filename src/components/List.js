import React from "react";
// import { Modal } from "react-bootstrap";
import ModalEdit from "./modal";


class TodoList extends React.Component {
  renderItems() {
    return this.props.data.map((item, index) => <ModalEdit key={index} {...item} {...this.props} />);
  }
  render() {
    return (
      <div className="list">
        {this.renderItems()}
      </div>
    );
  }
}
export default TodoList;
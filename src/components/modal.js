import { Modal } from 'react-bootstrap';
import React from 'react';
import Button from './common/Buttons'
import MockContent from '../mock/countryRegionMock';
import TodoInput from './common/InputField'

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // editing: false,
      show: false
    };
  }
  renderName() {
    return (
      <ul>
        {this.props.task}
      </ul>
    );
  }

  onSaveClick(e) {
    e.preventDefault();
    this.props.saveItem(this.props.task, this.state.editInput);
    this.setState({
      show: !this.state.show,
      // editing: false
    });
  }
  handleOnChange(e) {
    this.setState({
      editInput: e.target.value
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  handleEdit() {
    this.handleModal();
  }

  renderButtons() {
    return (
      <div className="todobutton">
        <span className="editdel">
          <li className="list-group-item text-capitalize d-flex justify-data-between ">
            <Button onClick={() => this.handleEdit()} value={this.props.Content.editButton} />
            <Button onClick={(this.props.deleteItem.bind(this, this.props.task))} value={this.props.Content.delButton} />
          </li>
        </span>
        <Modal show={this.state.show} animation={true} onHide={() => this.handleModal()}>
          <Modal.Header>{this.props.Content.modalPopup}</Modal.Header>
          <Modal.Body>
            <form >
              <TodoInput  type="text" className="modaledit"
                defaultValue={this.props.task}
                handleOnChange={(e) => this.handleOnChange(e)} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onSaveClick.bind(this)} value={this.props.Content.saveButton} />
            <Button onClick={() => this.handleModal()} value={this.props.Content.cancelButton} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="item">
        <br></br>
        <span className="name">
          {this.renderName()}
        </span>

        <span className="actions">
          {this.renderButtons()}
        </span>
      </div>
    );
  }
}

ModalEdit.defaultProps = {
  Content: MockContent
};

export default ModalEdit;
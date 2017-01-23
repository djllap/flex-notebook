
var Modal = React.createClass({

  render: function() {
    var Modal = ReactBootstrap.Modal;
    modalContent = "";

    if (this.props.modalContent == "Create Notebook") {
      modalContent = 
        <div>
          <Modal.Header closeButton onClick={() => this.props.toggleModal()} > 
            <Modal.Title>New Notebook</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NotebookForm 
              toggleModal={this.props.toggleModal} 
              user={this.props.user}
              setNotebooks={this.props.setNotebooks}
              selectNotebook={this.props.selectNotebook}
              ajaxListsState={this.props.ajaxListsState}
              modalContent={this.props.modalContent}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </div>
    } else if (this.props.modalContent == "Edit Notebook") {
      modalContent = 
        <div>
          <Modal.Header closeButton onClick={() => this.props.toggleModal()} > 
            <Modal.Title>Editing Notebook</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NotebookForm 
              toggleModal={this.props.toggleModal} 
              user={this.props.user}
              setNotebooks={this.props.setNotebooks}
              selectNotebook={this.props.selectNotebook}
              ajaxListsState={this.props.ajaxListsState}
              notebook={this.props.editing}
              modalContent={this.props.modalContent}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </div>
    }

    return (
      <div>
        <Modal show={this.props.isOpen} onHide={this.props.toggleModal}>
          {modalContent}
        </Modal>
      </div>
    );
  }
});
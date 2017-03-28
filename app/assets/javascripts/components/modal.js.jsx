
var Modal = React.createClass({

  render: function() {
    var Modal = ReactBootstrap.Modal;
    modalContent = "";
    modalTitle = "";

    if (this.props.modalContent == "Create Notebook") {
      modalContent = 
        <NotebookForm 
          toggleModal={this.props.toggleModal} 
          user={this.props.user}
          setNotebooks={this.props.setNotebooks}
          selectNotebook={this.props.selectNotebook}
          getNotebookLists={this.props.getNotebookLists}
          modalContent={this.props.modalContent}
        />
        modalTitle = "Creating Notebook";
    } else if (this.props.modalContent == "Edit Notebook") {
      modalContent = 
        <NotebookForm 
          toggleModal={this.props.toggleModal} 
          user={this.props.user}
          jumpToNotebooks={this.props.jumpToNotebooks}
          getNotebookLists={this.props.getNotebookLists}
          notebook={this.props.editing}
          modalContent={this.props.modalContent}
        />;
        modalTitle = "Editing Notebook";
    } else if (this.props.modalContent == "Create List") {

      modalContent = 
        <ListForm
          toggleModal={this.props.toggleModal}
          user={this.props.user}
          list={this.props.editing}
          notebookPages={this.props.notebookPages}
          modalContent={this.props.modalContent}
          notebook={this.props.notebook}
          getListPages={this.props.getListPages}
          setLists={this.props.setLists}
        />;
        modalTitle = "Create List";
    } else if (this.props.modalContent == "Edit List") {

    }

    return (
      <Modal show={this.props.isOpen} onHide={this.props.toggleModal}>
        <Modal.Header closeButton onClick={() => this.props.toggleModal()} > 
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
});
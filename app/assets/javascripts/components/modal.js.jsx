
var Modal = React.createClass({
  render: function() {
    var Modal = ReactBootstrap.Modal;
    return (
      <div>
        

        <Modal show={this.props.isOpen} onHide={this.props.toggleModal}>
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
            />

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
var NotebookForm = React.createClass({

  submitNotebook: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    toggleModal = this.props.toggleModal;
    jumpToNotebooks = this.props.jumpToNotebooks;
    getNotebookLists = this.props.getNotebookLists;

    if (this.props.modalContent == "Create Notebook") {
      $.ajax({
        type: "POST",
        url: '/users/' + this.props.user.id + '/notebooks',
        data: {name: name}, 
        success: (notebook) => {
          getNotebookLists(notebook);
          toggleModal();
        }
      });
    } else if (this.props.modalContent == "Edit Notebook") {
      $.ajax({
        type: "PATCH",
        url: '/users/' + this.props.user.id + '/notebooks/' + this.props.notebook.id,
        data: {name: name},
        success: (notebooks) => {
          jumpToNotebooks(notebooks);
          toggleModal();
        }
      });
    }
    
  },

  render: function() {

    if (this.props.modalContent == "Create Notebook") {
      submit = "Create Notebook";
    } else if (this.props.modalContent == "Edit Notebook") {
      let name = this.props.notebook.name;
      submit = "Update Notebook";
    }
    

    return (
      <form className="form-horizontal" onSubmit={this.submitNotebook}>
        <fieldset>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" 
                className="form-control"
                defaultValue={name} 
                placeholder="Notebook Name"
                ref="name"
              />
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button 
                  type="button" 
                  className="btn btn-default"
                  onClick={() => this.props.toggleModal()}
                >
                  Cancel
                </button>
                <button className="btn btn-primary">
                  {submit}
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

var NotebookForm = React.createClass({

  createNotebook: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    selectNotebook = this.props.selectNotebook;
    toggleModal = this.props.toggleModal;
    ajaxListsState = this.props.ajaxListsState;
    $.ajax({
      type: "POST",
      url: '/users/' + this.props.user.id + '/notebooks',
      data: {name: name}, 
      success: (notebook) => {
        console.log(notebook);
        ajaxListsState(notebook.notebook, selectNotebook);
        toggleModal();
      }
    })
  },

  render: function() {
    return (
      <form className="form-horizontal" onSubmit={this.createNotebook}>
        <fieldset>
          <legend>New Notebook</legend>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" 
                className="form-control" 
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
                  Create Notebook
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

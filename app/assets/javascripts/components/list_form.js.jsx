var ListForm = React.createClass({

  submitList: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let page_ids = [...this.refs.page_ids].filter(option => option.selected).map(option => option.id);
    toggleModal = this.props.toggleModal;
    jumpToNotebooks = this.props.jumpToNotebooks;
    getNotebookLists = this.props.getNotebookLists;
    console.log(page_ids);
    if (this.props.modalContent == "Create List") {
      $.ajax({
        type: "POST",
        url: '/users/' + this.props.user.id + '/notebooks/' + this.props.notebook.id + "/lists",
        data: {name: name, page_ids: page_ids}, 
        success: (list) => {
          this.props.getListPages(list);
          toggleModal();
        }
      });
    } else if (this.props.modalContent == "Edit List") {
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

    if (this.props.modalContent == "Create List") {
      submit = "Create List";
    } else if (this.props.modalContent == "Edit List") {
      name = this.props.notebook.name;
      submit = "Update List";
    }

    return (
      <form className="form-horizontal" onSubmit={this.submitList}>
        <fieldset>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" 
                className="form-control"
                defaultValue={name} 
                placeholder="List Name"
                ref="name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="selectPages" className="col-sm-2 control-label">Select Pages In List</label>

            <div className="col-sm-10">
              <select id="selectPages" multiple className="form-control" ref="page_ids">
                {this.props.notebookPages.map( function (page) {
                  return (
                    <option key={page.id} id={page.id}>
                      {page.name}
                    </option>
                  );
                }, this)}
              </select>
            </div>
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
        </fieldset>
      </form>
    );
  }
});

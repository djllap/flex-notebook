var ListForm = React.createClass({

  submitList: function(e) {
    e.preventDefault();
    let list = this.props.list;
    let name = this.refs.listName.value;
    let page_ids = [...this.refs.page_ids].filter(option => option.selected).map(option => option.id);
    toggleModal = this.props.toggleModal;
    jumpToNotebooks = this.props.jumpToNotebooks;
    getNotebookLists = this.props.getNotebookLists;

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
        url: '/users/' + this.props.user.id + '/notebooks/' + this.props.notebook.id + '/lists/' + this.props.list.id,
        data: {name: name, page_ids: page_ids},
        success: (list) => {
          this.props.getListPages(list);
          toggleModal();
        }
      });
    }
    
  },

  render: function() {

    if (this.props.modalContent == "Create List") {
      submit = "Create List";
      defaultName = null;
    } else if (this.props.modalContent == "Edit List") {
      defaultName = this.props.list.name;
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
                defaultValue={defaultName} 
                placeholder="List Name"
                ref="listName"
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

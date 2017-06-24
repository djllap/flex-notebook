var PageForm = React.createClass({

  submitPage: function(e) {
    e.preventDefault();
    let notebook = this.props.notebook;
    let list = this.props.list;
    let page = this.props.page;
    let name = this.refs.pageName.value;
    let list_ids = [...this.refs.list_ids].filter(option => option.selected).map(option => option.id);
    let content = this.refs.content.value;
    toggleModal = this.props.toggleModal;
    getListPages = this.props.getListPages;

    if (this.props.modalContent == "Create Page") {
      $.ajax({
        type: "POST",
        url: '/users/' + this.props.user.id + '/notebooks/' + this.props.notebook.id + '/pages/',
        data: {name: name, content: content, list_ids: list_ids}, 
        success: (data) => {
          this.props.selectList(data.pages, data.list);
          this.props.selectPage(data.page);
          toggleModal();
        }
      });
    } else if (this.props.modalContent == "Edit Page") {
      $.ajax({
        type: "PATCH",
        url: '/users/' + this.props.user.id + '/notebooks/' + this.props.notebook.id + '/pages/' + page.id,
        data: {name: name, content: content, list_ids: list_ids, list: list},
        success: (data) => {
          this.props.getListPages(data.list);
          this.props.selectPage(data.page);
          toggleModal();
        }
      });
    }
  },

  render: function() {
    if (this.props.modalContent == "Create Page") {
      defaultName = null;
      submit = "Create Technique";
    } else if (this.props.modalContent == "Edit Page") {
      defaultName = this.props.page.name;
      submit = "Update Technique";
    }

      return (
        <form className="form-horizontal" onSubmit={this.submitPage}>
          <fieldset>
            <div className="form-group">
              <label className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" 
                  className="form-control"
                  defaultValue={defaultName} 
                  placeholder="Technique Name"
                  ref="pageName"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="selectLists" className="col-sm-2 control-label">Select Lists Technique is in</label>

              <div className="col-sm-10">
                <select id="selectLists" multiple className="form-control" ref="list_ids">
                  {this.props.notebookLists.map( function (list) {
                    return (
                      <option key={list.id} id={list.id}>
                        {list.name}
                      </option>
                    );
                  }, this)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="content" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="5" id="content" ref="content"></textarea>
                <span className="help-block">Write a detailed description of how to perform this technique</span>

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

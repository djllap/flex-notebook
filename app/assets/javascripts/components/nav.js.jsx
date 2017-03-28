var Nav = React.createClass({

  render: function() {
    if (!this.props.nav.notebook) {
      createButtons = <a className="btn btn-xs btn-raised"
                        style={{float: "right"}}
                        onClick={() => this.props.toggleModal("Create Notebook")}
                      >
                        New Notebook
                      </a>;
      listItems = this.props.notebooks;
      navigateFunction = this.props.getNotebookLists;
      editFunction = this.props.editNotebook;
      deleteFunction = this.props.deleteNotebook;
    } else if (this.props.nav.notebook && !this.props.nav.list) {
      createButtons = <a className="btn btn-xs btn-raised"
                        style={{float: "right"}}
                        onClick={() => this.props.toggleModal("Create List")}
                      >
                        New List
                      </a>;
      listItems = this.props.lists;
      navigateFunction = this.props.getListPages;
      editFunction = this.props.editList;
      deleteFunction = this.props.deleteList;
    } else if (this.props.nav.notebook && this.props.nav.list) {
      createButtons = <a className="btn btn-xs btn-raised"
                        style={{float: "right"}}
                        onClick={() => this.props.toggleModal("Create Technique")}
                      >
                        New Technique
                      </a>;
      listItems = this.props.listPages;
      navigateFunction = this.props.selectPage;
      editFunction = this.props.editPage;
      deleteFunction = this.props.deletePage;
    } else {
      createButtons = null;
    };

    return (
      <div className="col-sm-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4 className="panel-title">Navigation</h4>
          </div>
          <div className="panel-body">

            <Breadcrumbs
              notebook={this.props.notebook}
              list={this.props.list}
              getNotebooks={this.props.getNotebooks}
              getNotebookLists={this.props.getNotebookLists}
            />

            {createButtons}

            <NavList
              listItems={listItems}
              navigateFunction={navigateFunction}
              editFunction={editFunction}
              deleteFunction={deleteFunction}
            />
          </div>
        </div>
      </div>
    );
  }
});

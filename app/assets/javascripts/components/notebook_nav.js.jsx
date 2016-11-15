var NotebookNav = React.createClass({

  render: function() {
    notebooks = this.props.notebooks;

    return (
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4 className="panel-title">Your Notebooks</h4>
          </div>

          <div className="panel-body">
            <Breadcrumbs
              notebook={this.props.notebook}
              list={this.props.list}
            />

            <ul className="nav nav-pills nav-stacked">
              <div className="btn-group-vertical" style={{"width": "100%"}}>
                {notebooks.map( function (notebook) {
                  return(
                    <li 
                      key={notebook.id} 
                      className="btn btn-block btn-raised btn-lg"
                      onClick={() => this.props.ajaxListsState(notebook, this.props.selectNotebook)}
                    >
                      {notebook.name}
                    </li>
                  );
                }, this )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

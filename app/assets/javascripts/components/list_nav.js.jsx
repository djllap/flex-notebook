var ListNav = React.createClass({

  render: function() {
    lists = this.props.lists;

    return (
      <div className="col-sm-4">
        
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4 className="panel-title">Your Notebooks</h4>
          </div>

          <div className="panel-body">
            <Breadcrumbs
              jumpToNotebooks={this.props.jumpToNotebooks}
              jumpToNotebook={this.props.jumpToNotebook}
              notebook={this.props.notebook}
              list={this.props.list}
              ajaxNotebooksState={this.props.ajaxNotebooksState}
              setNotebooks={this.props.setNotebooks}
            />

            <ul className="nav nav-pills nav-stacked">
              <div className="btn-group-vertical" style={{"width": "100%"}}>
                {lists.map( function (list) {
                  return(
                    <li 
                      key={list.id} 
                      className="btn btn-block btn-raised btn-lg"
                      onClick={() => this.props.ajaxPagesState(this.props.notebook, list, this.props.selectPage)}
                    >
                      {list.name}
                    </li>
                  );
                }, this )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      
    )
  }
});

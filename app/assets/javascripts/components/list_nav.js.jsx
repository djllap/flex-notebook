var ListNav = React.createClass({

  render: function() {
    lists = this.props.lists;

    return (
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4 className="panel-title">Your Notebooks</h4>
          </div>

          <div className="panel-body">
            <ul className="breadcrumb" 
              style={{"backgroundColor": "#fff", "marginBottom": "0"}}
            >
              <li>
                notebooks
              </li>
              <li className="active">
                {this.props.notebook.name}
              </li>
            </ul>

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

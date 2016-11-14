var PageNav = React.createClass({

  render: function() {
    list = this.props.list;
    pages = this.props.pages;

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
              <li>
                {this.props.notebook.name}
              </li>
              <li className="active">
                {this.props.list.name}
              </li>
            </ul>

            <ul className="nav nav-pills nav-stacked">
              <div className="btn-group-vertical" style={{"width": "100%"}}>
                {pages.map( function (page) {
                  return(
                    <li 
                      key={page.id} 
                      className="btn btn-block btn-raised btn-lg"
                      onClick={() => this.props.selectPage(page)}
                    >
                      {page.name}
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

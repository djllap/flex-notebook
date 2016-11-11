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
            <ul className="breadcrumb" 
              style={{"backgroundColor": "#fff", "marginBottom": "0"}}
            >
              <li className="active">
                notebooks
              </li>
            </ul>

            <ul className="nav nav-pills nav-stacked">
              <div className="btn-group-vertical" style={{"width": "100%"}}>
                {notebooks.map( function (notebook) {
                  return(
                    <li key={notebook.id}>
                      <a href="" className="btn btn-block btn-raised btn-lg">
                          {notebook.name}
                      </a>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

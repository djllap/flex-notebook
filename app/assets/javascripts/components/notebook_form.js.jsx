var NotebookForm = React.createClass({

  render: function() {
    return (
      <form action="" className="form-horizontal">
        <fieldset>
          <legend>New Notebook</legend>
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Notebook Name"/>
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-2">
                <button 
                  type="button" 
                  className="btn btn-default"
                  onClick={() => this.props.exitForm()}
                >
                  Cancel
                </button>
                <button className="btn btn-primary">Create Notebook</button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

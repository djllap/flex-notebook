var Technique = React.createClass({

  render: function() {
    form = this.props.form;
    content = null;

    if (!form) {
      if (this.props.page) {
        page = this.props.page;

        content =  
          <div>
            <h4>{page.name}</h4>
            <p>{page.content}</p>
          </div>
      } else {
        content = 
          <p>You have not selected a technique.</p>
      }
    } else {
      content = <NotebookForm
                  exitForm={this.props.exitForm}
                />
    }

    return (
      <div className="col-sm-8">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Technique</h3>
          </div>
          <div className="panel-body">
            {content}
          </div>
        </div>
      </div>
    )
  }
});

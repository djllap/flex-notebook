var Technique = React.createClass({

  render: function() {
    technique = null;

    if (this.props.page) {
      page = this.props.page;

      technique =  <div>
          <h4>{page.name}</h4>
          <p>{page.content}</p>
        </div>
    } else {
      technique = 
        <p>You have not selected a technique.</p>
    }

    return (
      <div className="col-md-8">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Technique</h3>
          </div>
          <div className="panel-body">
            {technique}
          </div>
        </div>
      </div>
    )
  }
});

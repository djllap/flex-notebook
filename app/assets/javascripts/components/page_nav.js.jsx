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
            <Breadcrumbs
              jumpToNotebooks={this.props.jumpToNotebooks}
              jumpToNotebook={this.props.jumpToNotebook}
              jumpToList={this.props.jumpToList}
              notebook={this.props.notebook}
              list={this.props.list}
            />

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

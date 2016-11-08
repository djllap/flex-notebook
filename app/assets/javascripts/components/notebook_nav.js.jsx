var NotebookNav = React.createClass({


  render: function() {
    return (
      <div className="col-md-4">
        <h3>Notebooks</h3>
        <ul className="nav nav-pills nav-stacked">
          <li><a href="">{this.props.notebooks[0].name}</a></li>
        </ul>
      </div>
    );
  }
});

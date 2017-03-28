var CreateButton = React.createClass({
  render: function() {
    return (
      <a className="btn btn-xs btn-raised"
         style={{float: "right"}}
         onClick={() => this.props.clickHandler}
      >
        {this.props.buttonText}
      </a>
    );
  }
});
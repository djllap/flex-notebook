var App = React.createClass({

  render: function() {
    return (
      <div>
        <NotebookNav notebooks={this.props.notebooks}></NotebookNav>
        <Technique></Technique>      
      </div>
    );
  }
});

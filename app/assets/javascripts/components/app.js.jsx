var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav
    };
  },

  selectNotebook: function(key) {
    const nav = {...this.state.nav};
    nav[notebook] = key;
    this.setState({nav})
  },

  render: function() {
    return (
      <div style={{"height": "100%"}}>
        <NotebookNav notebooks={this.props.notebooks}></NotebookNav>
        <Technique></Technique>      
      </div>
    );
  }
});

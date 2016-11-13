var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav,
      lists: this.props.lists
    };
  },

  selectNotebook: function(notebook) {
    const nav = {...this.state.nav};
    nav.notebook = notebook;

    $.ajax({
      url: '/users/' + this.props.user.id + '/notebooks/' + nav.notebook.id + '/lists',
      success: (data) => {
        console.log(data);
        let lists = {...this.state.lists};
        lists = data;
        this.setState({lists})
      }
    })

    this.setState({nav})
  },

  selectList: function(id) {
    const nav = {...this.state.nav};
    nav.list = null;
  },

  render: function() {

    let navBar = null;
    if (!this.state.nav.notebook) {
      navBar = <NotebookNav 
        notebooks={this.props.notebooks}
        selectNotebook={this.selectNotebook}
      />;
    } else if (this.state.nav.notebook && !this.state.nav.list) {
      navBar = <ListNav
        notebook={this.state.nav.notebook}
        lists={this.state.lists}
        selectList={this.selectList}
      />
    }

    return (
      <div style={{"height": "100%"}}>
        {navBar}
        <Technique></Technique>
      </div>
    );
  }
});

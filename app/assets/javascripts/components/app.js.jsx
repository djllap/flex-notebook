var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav,
      lists: null
    };
  },

  ajaxListState: function(notebook, selectNotebook) {
    $.ajax({
      url: '/users/' + this.props.user.id + '/notebooks/' + notebook.id + '/lists',
      success: (lists) => {
        console.log(lists);
        this.selectNotebook(lists, notebook);
      }
    })
  },

  selectNotebook: function(lists, notebook) {
    nav = {...this.state.nav};
    nav.notebook = notebook;

    this.setState({lists: lists});
    this.setState({nav: nav});
  },

  selectList: function(id) {
    nav = {...this.state.nav};
    nav.list = null;
  },

  render: function() {

    let navBar = null;
    if (!this.state.nav.notebook) {
      navBar = <NotebookNav 
        notebooks={this.props.notebooks}
        selectNotebook={this.selectNotebook}
        ajaxListState={this.ajaxListState}
      />;
    } else if (this.state.nav.notebook && !this.state.nav.list) {
      navBar = <ListNav
        notebook={this.state.nav.notebook}
        lists={this.state.lists.lists}
        selectList={this.selectList}
      />
    } else if (this.state.nav.notebook && this.state.nav.list) {
      navBar = <PageNav
        
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

var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav,
      lists: null,
      pages: null
    };
  },

  ajaxListsState: function(notebook, selectNotebook) {
    $.ajax({
      url: '/users/' + this.props.user.id + '/notebooks/' + notebook.id + '/lists',
      success: (lists) => {
        this.selectNotebook(lists, notebook);
      }
    })
  },

  ajaxPagesState: function(notebook, list, selectPage) {
    $.ajax({
      url: '/users/' + this.props.user.id + '/notebooks/' + notebook.id + '/lists/' + list.id,
      success: (pages) => {
        this.selectList(pages, list);
      }
    })
  },

  // ajaxViewPage: function() {
  //   $.ajax({
  //     url: '/users/' + this.props.user_id + '/notebooks/' + notebook.id + '/pages/' + page.id,
  //     success: (pages) => {
  //       this.selectPage();
  //     }
  //   })
  // },

  selectNotebook: function(lists, notebook) {
    nav = {...this.state.nav};
    nav.notebook = notebook;
    this.setState({lists: lists, nav: nav});
  },

  selectList: function(pages, list) {
    nav = {...this.state.nav};
    nav.list = list;
    this.setState({pages: pages, nav: nav});
  },

  selectPage: function(page)
 {
  nav = {...this.state.nav};
  nav.page = page;
  this.setState({nav: nav});
 },

  render: function() {

    let navBar = null;
    if (!this.state.nav.notebook) {
      navBar = <NotebookNav 
        notebooks={this.props.notebooks}
        selectNotebook={this.selectNotebook}
        ajaxListsState={this.ajaxListsState}
      />;
    } else if (this.state.nav.notebook && !this.state.nav.list) {
      navBar = <ListNav
        notebook={this.state.nav.notebook}
        lists={this.state.lists.lists}
        ajaxPagesState={this.ajaxPagesState}
      />
    } else if (this.state.nav.notebook && this.state.nav.list) {
      navBar = <PageNav
        notebook={this.state.nav.notebook}
        list={this.state.nav.list}
        pages={this.state.pages.pages}
        selectPage={this.selectPage}
      />
    }

    return (
      <div style={{"height": "100%"}}>
        {navBar}
        <Technique
          page={this.state.nav.page}
        />
      </div>
    );
  }
});

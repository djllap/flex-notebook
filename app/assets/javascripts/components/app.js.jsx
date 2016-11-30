var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav,
      lists: null,
      pages: null,
      form: null,
      isModalOpen: false
    };
  },

  toggleModal: function() {
    this.setState({isModalOpen: !this.state.isModalOpen})
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

  setNotebooks: function(notebooks) {
    this.setState({notebooks: notebooks})
  },

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

 jumpToNotebooks: function() {
    nav = {...this.state.nav};
    nav.notebook = null;
    nav.list = null;
    this.setState({nav: nav});
  },

  jumpToNotebook: function(notebook) {
    nav = {...this.state.nav};
    nav.notebook = notebook;
    nav.list = null;
    this.setState({nav: nav});
  },

  jumpToList: function(notebook, list) {
    nav = {...this.state.nav};
    nav.notebook = notebook;
    nav.list = list;
    this.setState({nav: nav});
  },



  deleteNotebook: function(notebook) {
    $.ajax({
      type: "DELETE",
      url: '/users/' + this.props.user.id + '/notebooks/' + notebook.id,
      success: (notebooks) => {
        this.setNotebooks(notebooks);
      }
    })
  },

  exitForm: function() {
    this.setState({form: null})
  },

  showNewNotebookForm: function() {
    form = "notebook";
    this.setState({form: form})
  },

  render: function() {

    let navBar = null;
    if (!this.state.nav.notebook) {
      navBar = <NotebookNav 
        notebooks={this.props.notebooks}
        selectNotebook={this.selectNotebook}
        ajaxListsState={this.ajaxListsState}
        deleteNotebook={this.deleteNotebook}
        showNewNotebookForm={this.showNewNotebookForm}
        toggleModal={this.toggleModal}
      />;
    } else if (this.state.nav.notebook && !this.state.nav.list) {
      navBar = <ListNav
        notebook={this.state.nav.notebook}
        lists={this.state.lists.lists}
        ajaxPagesState={this.ajaxPagesState}
        jumpToNotebooks={this.jumpToNotebooks}
        jumpToNotebook={this.jumpToNotebook}
      />
    } else if (this.state.nav.notebook && this.state.nav.list) {
      navBar = <PageNav
        notebook={this.state.nav.notebook}
        list={this.state.nav.list}
        pages={this.state.pages.pages}
        selectPage={this.selectPage}
        jumpToNotebooks={this.jumpToNotebooks}
        jumpToNotebook={this.jumpToNotebook}
        jumpToList={this.jumpToList}
      />
    }

    return (
      <div style={{"height": "100%"}}>
        {navBar}
        <Technique
          page={this.state.nav.page}
          form={this.state.form}
          exitForm={this.exitForm}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          user={this.props.user}
        >
        </Modal>
      </div>
    );
  }
});

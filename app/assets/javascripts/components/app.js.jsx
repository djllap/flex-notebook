var App = React.createClass({

  getInitialState: function() {
    return {
      notebooks: this.props.notebooks,
      nav: this.props.nav,
      editing: null,
      lists: null,
      pages: null,
      form: null,
      isModalOpen: false,
      modalContent: ""
    };
  },

  toggleModal: function(modalContent = "") {
    this.setState({isModalOpen: !this.state.isModalOpen});
    this.setState({modalContent: modalContent});
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

  ajaxNotebooksState: function(setNotebooks) {
    $.ajax({
      url: '/users/' + this.props.user.id + '/notebooks',
      success: (notebooks) => {
        console.log(notebooks);
        this.jumpToNotebooks(notebooks);
      }
    })
  },

  setNotebooks: function(notebooks) {
    this.setState({notebooks: notebooks});
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

 jumpToNotebooks: function(notebooks) {
    nav = {...this.state.nav};
    nav.notebook = null;
    nav.list = null;
    this.setState({notebooks: notebooks, nav: nav});
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

  editNotebook: function(notebook, event) {
    event.stopPropagation();
    this.setState({editing: notebook})
    this.toggleModal("Edit Notebook");
  },

  deleteNotebook: function(notebook, event) {

    event.stopPropagation();
    // event.stopImmediatePropagation();

    $.ajax({
      type: "DELETE",
      url: '/users/' + this.props.user.id + '/notebooks/' + notebook.id,
      success: (notebooks) => {
        console.log(notebooks);
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
        notebooks={this.state.notebooks}
        setNotebooks={this.setNotebooks}
        selectNotebook={this.selectNotebook}
        ajaxListsState={this.ajaxListsState}
        deleteNotebook={this.deleteNotebook}
        showNewNotebookForm={this.showNewNotebookForm}
        toggleModal={this.toggleModal}
        editNotebook={this.editNotebook}
      />;
    } else if (this.state.nav.notebook && !this.state.nav.list) {
      navBar = <ListNav
        notebook={this.state.nav.notebook}
        lists={this.state.lists.lists}
        ajaxPagesState={this.ajaxPagesState}
        ajaxNotebooksState={this.ajaxNotebooksState}
        jumpToNotebooks={this.jumpToNotebooks}
        jumpToNotebook={this.jumpToNotebook}
        setNotebooks={this.setNotebooks}
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
        ajaxNotebooksState={this.ajaxNotebooksState}
        setNotebooks={this.setNotebooks}
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
          modalContent={this.state.modalContent}
          user={this.props.user}
          notebook={this.state.editing}
          setNotebooks={this.setNotebooks}
          selectNotebook={this.selectNotebook}
          ajaxListsState={this.ajaxListsState}
          editing={this.state.editing}
        >
        </Modal>
      </div>
    );
  }
});

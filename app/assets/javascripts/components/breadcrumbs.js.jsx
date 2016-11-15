var Breadcrumbs = React.createClass({

  render: function() {
    current = null;

    if (!this.props.notebook) {
      current = "crumbs1";
    } else if (this.props.notebook && !this.props.list) {
      current = "crumbs2";
    } else if (this.props.notebook && this.props.list) {
      current = "crumbs3";
    }

    crumbs2 = null;
    crumbs3 = null;

    crumbs1 = 
      <li onClick={() => this.props.jumpToNotebooks()}
        className={(current == "crumbs1") ? "active" : ""}
      >
        {(current == "crumbs1") ? "All Notebooks" : <a href="">All Notebooks</a>}
      </li>;

    if (this.props.list) {
      crumbs3 = 
        <li className={(current == "crumbs3") ? "active" : ""}>
          {(current == "crumbs3") ? this.props.list.name : <a href="">{this.props.list.name}</a>}
        </li>
    }

    if (this.props.notebook) {
      crumbs2 = 
        <li onClick={() => this.props.jumpToNotebook(this.props.notebook)}
          className={(current == "crumbs2") ? "active" : ""}
        >
          {(current == "crumbs2") ? this.props.notebook.name : <a href="">{this.props.notebook.name}</a>}
        </li>;
    }

    return (
      <ul className="breadcrumb" 
        style={{"backgroundColor": "#fff", "marginBottom": "0"}}
      >
        {crumbs1}
        {crumbs2}
        {crumbs3}
      </ul>
    );
  }
});

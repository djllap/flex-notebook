var NavList = React.createClass({

  render: function() {
    return(
      <ul className="nav nav-pills nav-stacked">
        <div className="btn-group-vertical" style={{"width": "100%"}}>
          {this.props.listItems.map( function (item) {
            return (
              <li key={item.id}
                className="btn btn-block btn-lg"
                onClick={() => this.props.navigateFunction(item)}
                style={{paddingRight: "12px"}}
              >
                  {item.name}
                <span style={{color: "grey", float: "right"}}>
                  <span className="btn btn-s" style={{padding: '0.15em', color: 'grey'}}>
                    <i className="material-icons" 
                      style={{fontSize: "1em", marginRight: "0.15em"}}
                      onClick={(e) => this.props.editFunction(item, e)}
                    >
                      edit
                    </i>
                  </span>
                  <span className="btn btn-s" style={{padding: '0.15em', color: 'grey'}}>
                    <i 
                      className="material-icons" 
                      style={{fontSize: "1em"}}
                      onClick={(e) => this.props.deleteFunction(item, e)}
                    >
                      delete
                    </i>
                  </span>
                </span>
              </li>
            );
          }, this )}
        </div>
      </ul>
    );
  }
});

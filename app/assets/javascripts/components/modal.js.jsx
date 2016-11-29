var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Modal = React.createClass({
  render: function() {
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup 
          transitionName={this.props.transitionName}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          <div className="modal" key={1}>
            {this.props.children}
            Boobs!
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return (
        <ReactCSSTransitionGroup 
          transitionName={this.props.transitionName} 
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        />
      );
    }
  }
});
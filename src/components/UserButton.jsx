import React from "react"

class UserButton extends React.Component {
  
    constructor(props){
      super(props);
      this.changeAppState = this.changeAppState.bind(this);
    }
  
    changeAppState(e) {
      this.props.changePage(this.props.linkPage);
    }
  
    render() {
      return <button onClick={this.changeAppState}>{this.props.name}</button>;
    }
  }

  export default UserButton
import React from "react"
import UserButton from './UserButton'

class Header extends React.Component {
    render() {
      return (
        <React.Fragment>
          <UserButton name="Карта" linkPage="maps" changePage={this.props.changePage} />
          <UserButton name="Профиль" linkPage="profile" changePage={this.props.changePage}/>
          <UserButton name="Выйти" linkPage="login" changePage={this.props.changePage}/> 
        </React.Fragment>
        )   
    }
  }

  export default Header 
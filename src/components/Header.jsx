import React from "react"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../App';

class Header extends React.Component {
    render() {
      return (
        <LoginContext.Consumer>
          {({logOut, isLoggedIn, setPageMaps, setPageProfile}) => (
            <React.Fragment>
              <Button onClick={setPageMaps} >Карта</Button>
              <Button onClick={setPageProfile}>Профиль</Button>
              <Button name="Выйти" onClick={logOut} >Выйти</Button>
            </React.Fragment>
          )}
        </LoginContext.Consumer>   
      )
    }
  }

  export default Header 
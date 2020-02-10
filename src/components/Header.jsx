import React from "react"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../App';
import { Switch, Route, Link, Redirect} from 'react-router-dom'

class Header extends React.Component {
    render() {
      return (
        <LoginContext.Consumer>
          {({logOut, isLoggedIn, setPageMaps, setPageProfile}) => (
            <React.Fragment>
              <Link to='/maps'><Button>Карта</Button></Link>
              <Button href="/profile">Профиль</Button>
              <Button name="Выйти" onClick={logOut} >Выйти</Button>
            </React.Fragment>
          )}
        </LoginContext.Consumer>   
      )
    }   
  }

  export default Header 
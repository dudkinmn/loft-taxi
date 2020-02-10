import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import ProfileForm from './components/ProfileForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Map from './components/Map'
import { Switch, Route, Link, Redirect, useHistory} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'


class App extends React.Component {
  
  state = { 
    isLoggedIn: false,  
  }

  logIn = (login, password) => {
    // let history = useHistory();
    console.log("я в аппе" + login + password);
    this.setState({isLoggedIn: true}, () => <Redirect to="/dashboard" />)
  }
 
  logOut = () => {
    this.changePage('login')
    this.setState({isLoggedIn: false});
  }

  setPageMaps = () => {this.setState({curPage: "maps"})}
  setPageProfile = () => {this.setState({curPage: "profile"})}


  pages = {
    maps: () => (
      <React.Fragment>
          <Header/>
          <Map mapboxApiAccessToken ='pk.eyJ1IjoiZHVka2lubW4iLCJhIjoiY2s1dmhyOWVoMHE4cDNrbzBnMzZla2cxciJ9.HmUvlYG3zbSoCth7HBzM_A'/>
      </React.Fragment>
      ),
    profile: () => (
        <React.Fragment>
          <Header/>
          <ProfileForm changePage={this.changePage}/>
        </React.Fragment>
      ),
    login: () => <LoginForm changePage={this.changePage}/>,
    register: () => <RegisterForm changePage={this.changePage}/>
  }

   render() {
    console.log('страница целиком перерендерилась')
    console.log ("IsLoggedIn=" + this.state.isLoggedIn)
    return (
      
      <LoginContext.Provider value={{...this.state, logIn:this.logIn, logOut: this.logOut}}>
        <Switch>
          <Route path='/register' component={this.pages.register}  /> 
          <Route path='/maps' component={this.pages.maps}  />
          {
            // !this.state.isLoggedIn ? <Redirect to="/maps"/> : <Redirect to="/register"/>
          }
                    <Route path="/login" component={this.pages.login} />

          <PrivateRoute 
            component={this.pages.profile} 
            targetPath='/profile'
            isAuthorized={this.state.isLoggedIn}
            loginPath='/login'/>
          <PrivateRoute 
            component={this.pages.maps} 
            targetPath='/maps'
            isAuthorized={this.state.isLoggedIn}
            loginPath='/login'/>
          <Route path='*' component="<div>404 Страница не найдена</div>" />
          <Route path="/login" component={this.pages.login} />

        </Switch>
      </LoginContext.Provider>

    )
    }
}

function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <LoginContext.Consumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...rest} />
          )}
        </LoginContext.Consumer>
      );
    }
  };
}


//PrivateRoute = withAuth(PrivateRoute);


export default App;
export const LoginContext = React.createContext();


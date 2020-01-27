import React from 'react';
import './App.css';
import Header from './components/Header'
import ProfileForm from './components/ProfileForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Map from './components/Map'



class App extends React.Component {
  state = { 
    curPage: "login",

    logIn: (login, password) => {
        console.log("я в аппе" + login + password);
        this.setState.isLoggedIn = true;
        this.changePage( 'maps')   
        },

    logOut: () => {
        this.changePage('login')
        this.setState.isLoggedIn = false
        },
    
    isLoggedIn: false,

    setPageMaps: () => {this.setState({curPage: "maps"})},
    setPageProfile: () => {this.setState({curPage: "profile"})}
      
  }

 

  pages = {
    maps: () => <Map mapboxApiAccessToken ='pk.eyJ1IjoiZHVka2lubW4iLCJhIjoiY2s1dmhyOWVoMHE4cDNrbzBnMzZla2cxciJ9.HmUvlYG3zbSoCth7HBzM_A'/>,
    profile: () => <ProfileForm changePage={this.changePage}/>,
    login: () => <LoginForm changePage={this.changePage}/>,
    register: () => <RegisterForm changePage={this.changePage}/>
  }
 
  changePage = (curPage) => {
    this.setState({curPage})
  }

  renderHeader = () => (this.state.curPage==='maps' || this.state.curPage==='profile') && <Header changePage={this.changePage}/>

   render() {
    return (
      <LoginContext.Provider value={this.state}>
        <div>
          {this.renderHeader()}
          {this.pages[this.state.curPage]()}
        </div>
      </LoginContext.Provider>

    )
    }
}

export default App;
export const LoginContext = React.createContext();


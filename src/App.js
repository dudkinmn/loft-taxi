import React from 'react';
import './App.css';
import Header from './components/Header'
import ProfileForm from './components/ProfileForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'



class App extends React.Component {
  state = { curPage: "login"};

  pages = {
    maps: () => <h1>Карта</h1>,
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
      <div>
        {this.renderHeader()}
        {this.pages[this.state.curPage]()}
      </div>

    )
    }
}

export default App;

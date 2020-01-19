import React from 'react';
import './App.css';


class App extends React.Component {
  state = { curPage: "maps"};
 
  changePage = (needPage) => {
    this.setState({curPage:needPage})
  }

   render() {
      console.log(this.state);
      switch (this.state.curPage) {
        case "maps" : 
              return (
                <React.Fragment>
                   <Header changePage={this.changePage.bind(this)}/>
                   <h1>Карта</h1>
                </React.Fragment>)
        case "profile" :
              return (
                 <React.Fragment>
                    <Header changePage={this.changePage.bind(this)}/>
                    <h1>Профиль</h1>
                </React.Fragment>)
        case "login" :
              return (
                <React.Fragment>
                  <LoginForm changePage={this.changePage.bind(this)}/>>
                </React.Fragment>)
        case "register" :
          return (
            <React.Fragment>
              <RegisterForm changePage={this.changePage.bind(this)}/>>
            </React.Fragment>)
        default : 
              return (
                <React.Fragment>
                  <LoginForm changePage={this.changePage.bind(this)}/>>
                </React.Fragment>)
      }
   }
  }  


class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserButton name="Карта" linkPage="maps" changePage={this.props.changePage.bind(this)} />
        <UserButton name="Профиль" linkPage="profile" changePage={this.props.changePage.bind(this)}/>
        <UserButton name="Выйти" linkPage="login" changePage={this.props.changePage.bind(this)}/> 
      </React.Fragment>
      )   
  }
}

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

class LoginForm extends React.Component {
  state = { login: "", password: "" };

  constructor(props){
    super(props);
    this.changeAppState = this.changeAppState.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    // Предотвращаем перезагрузку страницы
    this.props.changePage("maps");
    // Делаем что-то с данными формы
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  changeAppState = event => {
    event.preventDefault();
    this.props.changePage('register');
  }

  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Войти</p>
        <p>Новый пользователь?
          <a href='' onClick={this.changeAppState}>Зарегистрируйтесь</a> 
        </p>

        <label>Имя пользователя</label>
        <br></br>
        <input
            type="text"
            value={login}
            onChange={this.handleLoginChange}
        />
        <br></br>
        <label>Пароль:</label>
        <br></br>
        <input
            type="text"
            value={password}
            onChange={this.handlePasswordChange}
        />
        <br></br>
        <input type="submit" value="Войти" />
        <br></br>
      </form>
    );
  }
}

class RegisterForm extends React.Component {
  state = { login: "", password: "", password2:"" };

  constructor(props){
    super(props);
    this.changeAppState = this.changeAppState.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    // Предотвращаем перезагрузку страницы
    if (this.state.password === this.state.password2) {
      this.props.changePage("maps");
    } else {
      alert ('Введенные пароли не совпадают!')
      this.setState({password2:""})
    }
    
    // Делаем что-то с данными формы
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
    
  };

  handlePassword2Change = event => {
    this.setState({ password2: event.target.value });
    console.log(this.state.password2);

  };

  changeAppState = event => {
    event.preventDefault();
    this.props.changePage('profile');
  }

  render() {
    const { login, password, password2 } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Регистрация нового пользователя</p>
   
        <label>Адрес электронной почты</label>
        <br></br>
        <input
            type="text"
            value={login}
            onChange={this.handleLoginChange}
        />
        <br></br>
        <br></br>
        <label>Пароль:</label>
        <br></br>
        <input
            type="text"
            value={password}
            onChange={this.handlePasswordChange}
        />
        <br></br>
        <label>Повторите пароль:</label>
        <br></br>
        <input
            type="text"
            value={password2}
            onChange={this.handlePassword2Change}
        />
        <br></br>
        <br></br>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    );
  }
}



export default App;

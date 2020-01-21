import React from 'react';
import './App.css';


class App extends React.Component {
  state = { curPage: "login"};
 
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
                    <ProfileForm changePage={this.changePage.bind(this)}/>
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
  state = { login: "", password: "", name:"", surname:"" };

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

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
    
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleSurnameChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  changeAppState = event => {
    event.preventDefault();
    this.props.changePage('profile');
  }

  render() {
    const { login, password, name, surname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Регистрация</p>
        <p>Уже зарегистрированы?
          <a href='' onClick={this.changeAppState}>Войти</a> 
        </p>
        <label>Адрес электронной почты</label>
        <br></br>
          <input
              type="email"
              placeholder="Адрес электронной почты"
              value={login}
              onChange={this.handleLoginChange}
          />
        <br></br>

        <div>
          <label>Имя*:</label>
          <br></br>
          <input
            type="text"
            value={name}
            placeholder="Имя"
            onChange={this.handleNameChange}
          />
        </div>

        <div>
          <label>Фамилия*:</label>
          <br></br>
          <input
            type="text"
            value={surname}
            placeholder="Фамилия"
            onChange={this.handleSurnameChange}
          />
        </div>

        
        <br></br>
        <label>Пароль:</label>
        <br></br>
        <input
            type="password"
            value={password}
            placeholder="Пароль"
            onChange={this.handlePasswordChange}
        />
       
        <br></br>
        <input type="submit" value="Войти" />
      </form>
    );
  }
}

class ProfileForm extends React.Component {
  state = { login: "", password: "", name:"", surname:"" };

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

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
    
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleSurnameChange = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  changeAppState = event => {
    event.preventDefault();
    this.props.changePage('profile');
  }

  render() {
    const { login, password, name, surname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Профиль</p>
        <p>Способ оплаты</p>

        <label>Адрес электронной почты
            <input
              type="email"
              placeholder="Адрес электронной почты"
              value={login}
              onChange={this.handleLoginChange}
            />
        </label>

        <div>
          <label>Имя*:</label>
          <br></br>
          <input
            type="text"
            value={name}
            placeholder="Имя"
            onChange={this.handleNameChange}
          />
        </div>

        <div>
          <label>Фамилия*:</label>
          <br></br>
          <input
            type="text"
            value={surname}
            placeholder="Фамилия"
            onChange={this.handleSurnameChange}
          />
        </div>

        
        <br></br>
        <label>Пароль:</label>
        <br></br>
        <input
            type="password"
            value={password}
            placeholder="Пароль"
            onChange={this.handlePasswordChange}
        />
       
        <br></br>
        <input type="submit" value="Войти" />
      </form>
    );
  }
}


export default App;

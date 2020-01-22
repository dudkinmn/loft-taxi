import React from 'react'

class LoginForm extends React.Component {
    state = { login: "", password: "" };
  
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
            <a href='#' onClick={this.changeAppState}>Зарегистрируйтесь</a> 
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

  export default LoginForm
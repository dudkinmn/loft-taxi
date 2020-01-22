import React from 'react'

class RegisterForm extends React.Component {
    state = { login: "", password: "", name:"", surname:"" };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.changePage("maps");
    };
  
    handleTextChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state.name);
    };

    changeAppState = event => {
        event.preventDefault();
        this.props.changePage('maps');
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
                name="login"
                type="email"
                placeholder="Адрес электронной почты"
                value={login}
                onChange={this.handleTextChange}
            />
          <br></br>
  
          <div>
            <label>Имя*:</label>
            <br></br>
            <input
                name="name"
                type="text"
                value={name}
                placeholder="Имя"
                onChange={this.handleTextChange}
            />
          </div>
  
          <div>
            <label>Фамилия*:</label>
            <br></br>
            <input
                name="surname"
              type="text"
              value={surname}
              placeholder="Фамилия"
              onChange={this.handleTextChange}
            />
          </div>
  
          
          <br></br>
          <label>Пароль:</label>
          <br></br>
          <input
                name='password'
              type="password"
              value={password}
              placeholder="Пароль"
              onChange={this.handleTextChange}
          />
         
          <br></br>
          <input type="submit" value="Войти" />
        </form>
      );
    }
  }
  
  /* организовать с помощью обьекта и мэпа 
  в одну строчку */

  export default RegisterForm
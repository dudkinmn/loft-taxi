import React from 'react'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {LoginContext} from '../App';


class RegisterForm extends React.Component {
    state = { login: "", password: "", name:"", surname:"" };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.changePage("maps");
    };
  
    handleTextChange = event => {
      event.preventDefault();
      console.log([event.target.name]);
      this.setState({ [event.target.name]: event.target.value });
      
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
            <a href='/' onClick={this.changeAppState}>Войти</a> 
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
          <br></br>
              
          <Button 
            name="submitButton"
            variant="contained" 
            color="primary"
            href="/maps"
            type="submit"
          >
            Войти
          </Button>
        </form>
      );
    }
  }
  
  /* организовать с помощью обьекта и мэпа 
  в одну строчку */

  export default RegisterForm
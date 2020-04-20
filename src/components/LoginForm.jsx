import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {LoginContext} from '../App';

class LoginForm extends React.Component {
    state = { login: "", password: "" };
  

    handleTextChange = event => {
      event.preventDefault();
      console.log([event.target.name]);
      this.setState({ [event.target.name]: event.target.value });
      
    };
  
  
    changeAppState = event => {
      event.preventDefault();
      this.props.changePage('register');
    }
  
    makelogIn = (logIn) => (e) => {
      e.preventDefault();
      logIn(this.state.login, this.state.password)
    }

    render() {
      const { login, password } = this.state;
      return (
        <LoginContext.Consumer>
          {({logIn}) => (
            <form onSubmit={this.makelogIn(logIn)}>
              <p>Войти</p>

              <p>Новый пользователь?
                <Link to="/register">Зарегистрируйтесь</Link>
              </p>
      
              <TextField
                required
                //error
                name='login'
                id="loginText"
                label="Имя пользователя"
                //defaultValue="Имя пользователя"
                //helperText="Неверный логин"
                value={login}
                onChange={this.handleTextChange}
              />

              <br></br>

              <TextField
                required
                //error
                name='password'
                id="passwordText"
                label="Пароль"
                //defaultValue="Пароль"
                //helperText="Неверный пароль"
                value={password}
                onChange={this.handleTextChange}
              />

              <br></br>
              <br></br>
              
                <Button 
                  name="submitButton"
                  variant="contained" 
                  color="primary"
                  type="submit"
                >
                  Войти
                </Button>
                

            </form>
          )}
        </LoginContext.Consumer>
      );
    
    }
  }

  export default LoginForm
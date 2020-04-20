import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { LoginContext } from '../App';


class RegisterForm extends React.Component {
  state = { login: "", password: "", name: "", surname: "" };

  handleTextChange = event => {
    event.preventDefault();
    console.log([event.target.name]);
    this.setState({ [event.target.name]: event.target.value });
  };

  makelogIn = (logIn) => (e) => {
    e.preventDefault();
    logIn(this.state.login, this.state.password)
  }


  render() {
    const { login, password, name, surname } = this.state;
    return (
      <LoginContext.Consumer>
        {({ logIn }) => (
          <form onSubmit={this.makelogIn(logIn)}>
            <p>Регистрация</p>

            <p>Уже зарегистрированы?
              <Link to="/login">Войти</Link>
            </p>

            <TextField
              required
              //error
              name='login'
              id="loginText"
              label="E-mail"
              //defaultValue="Имя пользователя"
              //helperText="Неверный логин"
              value={login}
              onChange={this.handleTextChange}
            />

            <div>

              <TextField
                required
                //error
                name='name'
                id="nameText"
                label="Имя"
                //defaultValue="Имя пользователя"
                //helperText="Неверный логин"
                value={name}
                onChange={this.handleTextChange}
              />

              <TextField
                required
                //error
                name='surname'
                id="surnameText"
                label="Фамилия"
                //defaultValue="Имя пользователя"
                //helperText="Неверный логин"
                value={surname}
                onChange={this.handleTextChange}
              />

            </div>

            <TextField
              required
              //error
              name='password'
              id="passwordText"
              label="Пароль"
              //defaultValue="Имя пользователя"
              //helperText="Неверный логин"
              value={password}
              onChange={this.handleTextChange}
            />

            <br />
            <br />

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

/* организовать с помощью обьекта и мэпа 
в одну строчку */

export default RegisterForm
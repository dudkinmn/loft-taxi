import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ProfileForm extends React.Component {
  state = { cardNumber: "", timeToExceed: "", userName: "", cvc: "" };

  handleSave = event => {
    event.preventDefault();
    alert('Данные сохранены');
    //this.props.changePage("maps");
  };

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.name);
  };

  render() {
    const { cardNumber, timeToExceed, userName, cvc } = this.state;
    {console.log("в рендер профиль")}
    return (
      
      <form onSubmit={this.handleSave}>
        <p>Профиль</p>
        <p>Способ оплаты</p>
        <div>
          <TextField
            required
            //error
            name='cardnumber'
            id="cardnumber"
            label="Номер карты"
            //defaultValue="Имя пользователя"
            //helperText="Неверный логин"
            value={cardNumber}
            onChange={this.handleTextChange}
          />
          <br />
          <TextField
            required
            //error
            name='timeToExceed'
            id='timeToExceed'
            label='Срок действия'
            value={timeToExceed}
            onChange={this.handleTextChange}
          />
        </div>

        <div>
          <TextField
            required
            //error
            name='userName'
            id='userName'
            label='Имя пользователя'
            value={userName}
            onChange={this.handleTextChange}
          />
          <br />
          <TextField
            required
            //error
            name='cvc'
            id='cvc'
            label='CVC-код'
            value={cvc}
            onChange={this.handleTextChange}
          />
        </div>

        <br></br>
        <Button
          name="submitButton"
          variant="contained"
          color="primary"
          type="submit"
        >Сохранить</Button>
      </form>
    );
  }
}


export default ProfileForm
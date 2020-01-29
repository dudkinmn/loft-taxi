import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ProfileForm extends React.Component {
    state = { cardNumber: "", timeToExceed: "", userName:"", cvc:"" };
   
    handleSave = event => {
      event.preventDefault();
      this.props.changePage("maps");
    };
  
    handleTextChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.name);
    };
  
    changeAppState = event => {
      event.preventDefault();
      this.props.changePage('profile');
    }
  
    render() {
      const { cardNumber, timeToExceed, userName, cvc } = this.state;
      return (
        <form onSubmit={this.handleSave}>
          <p>Профиль</p>
          <p>Способ оплаты</p>
  
          <TextField 
            name
            required id="standard-basic" 
            label="Номер карты" 
            /*value={cardNumber} 
            onChange={this.handleTextChange}*/
          />

  
          <label>Срок действия
              <input
                name='timeToExceed'
                type="text"
                placeholder="вв m yyyy"
                value={timeToExceed}
                onChange={this.handleTextChange}
              />
          </label>
  
          <label>Имя Фамилия
              <input
                name='userName'
                type="text"
                placeholder="Mikhail Bulgakov"
                value={userName}
                onChange={this.handleTextChange}
              />
          </label>
  
          <label>CVC
              <input
                name='cvc'
                type="text"
                placeholder="123"
                value={cvc}
                onChange={this.handleTextChange}
              />
          </label>
         
          <br></br>
          <input type="submit" value="Сохранить" />
        </form>
      );
    }
  }


  export default ProfileForm
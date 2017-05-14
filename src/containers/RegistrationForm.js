import React, {Component} from 'react';
import styles from './RegistrationForm.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:''
    };
    // this.handleEmailChange = ::this.handleEmailChange;
    // this.handleSubmit = ::this.handleSubmit;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submited. Email=', this.state.email);

  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={::this.handleSubmit}>
          <input type='text'
            placeholder='E-mail'
            value={this.state.email}
            onChange={::this.handleEmailChange}
            className={styles.emailField}
          />
          <button
            className={styles.submitBtn}
          >Save</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

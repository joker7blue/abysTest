import React from "react";
import { authFirebase, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signup.scss";


export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  handleChange = ($event) => {

    const { name, value } = $event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async ($event) => {

    $event.preventDefault();

    const { displayName, email, password, passwordConfirm } = this.state;

    if (password !== passwordConfirm) {
        alert('Password don\'t match');
        return;
    }

    try {
        
        const { user } = await authFirebase.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});

        this.setState({
            displayName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          });

    } catch (error) {
        
        console.log('ERROR TO SUGN IN WITH EMAIL AND PASSWORD  =====> ', error);
    }
    
  }

  render() {
    return (
      <div className="signup">
        <h2>You don't have account yet ?</h2>
        <span>Register Now!</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="display name"
            required
            value={this.state.displayName}
            handleChange={this.handleChange}
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="passwordConfirm"
            label="Password confirm"
            required
            value={this.state.passwordConfirm}
            handleChange={this.handleChange}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

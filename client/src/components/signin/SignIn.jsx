import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './signIn.scss'
import { authFirebase, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async ($event) => {
        $event.preventDefault();

        const { email, password } = this.state;

        try {
            
            await authFirebase.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log('ERROR TO SIGN IN WITH EMAIL AND PASSWORD =======> ', error);
        }
    }

    handleChange = ($event) => {
        const {name, value} = $event.target;
        this.setState({[name]: value});
    }

    render() {

        return (
            <div className="signin">
                <h2>already have an account ?</h2>
                <span>sign in</span>

                <form onSubmit={this.handleSubmit}>

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

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="submit" isGoogleSignIn={true} onClick={signInWithGoogle}>Google sign in</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}
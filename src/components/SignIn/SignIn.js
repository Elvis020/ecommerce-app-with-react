import React, {useState} from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignIn.scss'

function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })


    // Function that handles the e.target.value
    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setSignIn({...signIn, [name]:value})
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(signIn)
      setSignIn({ email: "", password: "" });
      
    }
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput handleChange={handleInputChange} label="Email" type="email" name="email" required value={signIn.email} />
          <FormInput handleChange={handleInputChange} label="Password" type="password" name="password" required value={signIn.password} />
          <CustomButton type="submit"> Sign In</CustomButton>
        </form>
      </div>
    );
}

export default SignIn

import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import "./SignIn.scss";

function SignIn() {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  // Function that handles the e.target.value
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };



  // Function to handle Submission of Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(signIn.email, signIn.password)
      setSignIn({ email: "", password: "" });
    } catch (error) {
      console.log("Pls make sure you signed up")
    }
  };




  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput handleChange={handleInputChange} label="Email" type="email" name="email" required value={signIn.email} />
        <FormInput handleChange={handleInputChange} label="Password" type="password" name="password" required value={signIn.password} />
        <div className="buttons">
          <CustomButton type="submit"> Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            {" "}
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

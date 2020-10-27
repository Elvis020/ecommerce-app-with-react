import React,{useState} from 'react';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './SignUp.scss';

function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Function to handle the form submission
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(password !== confirmPassword){
          alert("passwords don't match");
          return;
      }
      try {
          const {user} = await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfileDocument(user, {displayName});

        //   Clearing the form
          setDisplayName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
      } catch (error) {
          console.log("Sorry couldn't add user from input",error)
      }
    }




    // Function to handle Change events
    // const handleChange = (e) => {
    //   const {name, value} = e.target;
    //   setDisplayName({[name]: value})
    //   setEmail({[name]: value})
    //   setPassword({[name]: value})
    //   setConfirmPassword({[name]: value})
    // }







    return (
        <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                {/* DisPlay Name */}
                <FormInput type='text' name='displayName' onChange={(e) => setDisplayName(e.target.value)} label='Display Name' required value={displayName}>
                </FormInput>
                {/* email */}
                <FormInput type='email' name='email' onChange={(e) => setEmail(e.target.value)} label='Email' required value={email}>
                </FormInput>
                {/* Password */}
                <FormInput type='password' name='password' onChange={(e) =>setPassword(e.target.value) } label='Password' required value={password}>
                </FormInput>
                {/* DisPlay Name */}
                <FormInput type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' required value={confirmPassword}>
                </FormInput>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            
        </div>
    )
}

export default SignUp

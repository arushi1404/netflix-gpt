import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png'
    alt='login' />

        </div>

        <form className='p-12 bg-black absolute   w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? " Sign In" : "Sign Up"}</h1>
          <input type='text' placeholder='Email-Address' className='p-4 my-4 w-full bg-gray-800' />
        { !isSignInForm && (  <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />)}
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
          <button type='submit' className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer' > {isSignInForm ? " Sign In" : "Sign Up"}</button>
          <p className='py-2 cursor-pointer' onClick={ toggleSignInForm }> {isSignInForm ? " New to Netflix? SignUp Now" : "Already registered? SignIn Now"} </p>

        </form>
    </div>
  )
}

export default Login
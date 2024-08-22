import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm, setIsSignInFrom] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
        </div>
        <form className='absolute p-12 pt-8 w-3/12 my-44 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl pb-4 m-2'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm && ( <input type="text" placeholder='Full Name' className='p-[10px] m-2 rounded-md w-full bg-gray-700'/>)}
            {/*if it is not my sign in form then show the above input box (!isSignInForm --> not sign in form) */}

            <input type="text" placeholder='Email Address' className='p-[10px] m-2 rounded-md w-full bg-gray-700'/>

            <input type="password" placeholder='Password' className='p-[10px] m-2 rounded-md w-full bg-gray-700'/>
            <button className='p-2 m-2 my-4 rounded-md w-full cursor-pointer bg-red-700'>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='py-4 mx-2 cursor-pointer w-full' onClick={toggleSignInForm}>
                {isSignInForm? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."}
            </p>
        </form>
    </div>
  )
}

export default Login
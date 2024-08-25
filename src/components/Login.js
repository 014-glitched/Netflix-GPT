import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return; //If the message is not null then it will return with the error message passed

    //Sign In Sign Up logic
    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4D35AQHI3OK2M5UA8w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1668925773005?e=1725220800&v=beta&t=BWcFawj4auu0PlUPdkvy1kxbsrKNOAAe_gweX8hHdB0"})
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
              //updating the store with photoURL and display name here
          }).catch((error) => {
              setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 pt-8 w-[28%] my-44 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl pb-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-[10px] m-2 rounded-md w-full bg-gray-700"
          />
        )}
        {/*if it is not my sign in form then show the above input box (!isSignInForm --> not sign in form) */}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-[10px] m-2 rounded-md w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-[10px] m-2 rounded-md w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2 mx-2">
          {errorMessage}
        </p>

        <button
          className="p-2 m-2 my-4 rounded-md w-full cursor-pointer bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 mx-2 cursor-pointer w-full"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

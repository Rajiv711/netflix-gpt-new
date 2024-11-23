import React, { useRef, useState } from "react";
import {
  checkValidateDataSignInForm,
  checkValidateDataSignUpForm,
} from "../utils/validate";

const SignForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    if (isSignInForm) {
      setErrorMsg(
        checkValidateDataSignInForm(email.current.value, password.current.value)
      );
    } else {
      setErrorMsg(
        checkValidateDataSignUpForm(
          name.current.value,
          email.current.value,
          password.current.value
        )
      );
    }
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMsg(null);
  };
  return (
    <div>
      <form
        className="absolute rounded-md bg-opacity-65 bg-black w-1/2 lg:w-1/3 my-36 mx-auto right-0 left-0 p-12 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-2xl p.-2 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="rounded-lg p-4 my-4 w-full bg-opacity-0 border bg-black"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="rounded-lg p-4 my-4 w-full bg-opacity-0 border bg-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-0 bg-black rounded-lg border"
        />
        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="my-4 cursor-pointer" onClick={toggleForm}>
            New to Netflix? Sign Up Now
          </p>
        ) : (
          <p className="my-4 cursor-pointer" onClick={toggleForm}>
            Already a User? Sign In Now
          </p>
        )}
      </form>
    </div>
  );
};

export default SignForm;

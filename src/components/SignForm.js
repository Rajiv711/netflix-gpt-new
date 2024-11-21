import React, { useState } from "react";

const SignForm = () => {
 const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <form className="absolute rounded-md bg-opacity-65 bg-black w-1/2 lg:w-3/12 my-36 mx-auto right-0 left-0 p-12 text-white">
        <h1 className=" font-bold text-2xl p.-2">
          {isSignInForm?'Sign In':'Sign Up'}
        </h1>
        {!isSignInForm &&
         <input type="text" placeholder="Enter Name"
         className="rounded-lg p-4 my-4 w-full bg-opacity-0 border bg-black"
          />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-lg p-4 my-4 w-full bg-opacity-0 border bg-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-0 bg-black rounded-lg border"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg font-bold">
        {isSignInForm?'Sign In':'Sign Up'}
        </button>
        {
          isSignInForm ? <p className="my-4 cursor-pointer" onClick={toggleForm}>New to Netflix? Sign Up Now</p> 
          : 
          <p className="my-4 cursor-pointer" onClick={toggleForm}>Already a User? Sign In Now</p>
        }
        
      </form>
    </div>
  );
};

export default SignForm

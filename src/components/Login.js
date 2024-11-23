import React from "react";
import Header from "./Header";
import SignForm from "./SignForm";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-5">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="bg-black relative   w-full h-full "></div>
      </div>
      <SignForm />
    </div>
  );
};

export default Login;

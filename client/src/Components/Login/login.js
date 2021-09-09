import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      className="landP btnAuth0" 
      onClick={() => loginWithRedirect()}>
      <h3>Log In</h3>
    </button>
  );
};

export default LoginButton;
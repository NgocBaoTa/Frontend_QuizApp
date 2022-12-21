import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [signup, setSignup] = useState(true);

  const [login, setLogin] = useState(
    localStorage.getItem("user_token")
      ? Boolean(localStorage.getItem("user_token"))
      : false
  );

  return (
    <div>
      <LoginContext.Provider
        value={{
          login,
          setLogin,
          signup,
          setSignup,
        }}
      >
        {children}
      </LoginContext.Provider>
    </div>
  );
}

export { LoginContext, LoginProvider };

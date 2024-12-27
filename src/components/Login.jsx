import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        {"   "}
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={handleSumbit}>Sumbit</button>
      </div>
    </>
  );
}

export default Login;

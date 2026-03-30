
import React, { useState } from 'react'

const Login = ({goToRegister}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
   
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleClear = () => {
  
    setEmail("");
    setPassword("");
  };
  return (
    <div>
        
          <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button onClick={handleRegister}>Login</button>
        <button onClick={handleClear}>Clear</button>
      </div>
                  <p>
        Want to Register?{" "}
        <span onClick={goToRegister}>
          Register
        </span>
      </p>
    </div>
  )
}

export default Login

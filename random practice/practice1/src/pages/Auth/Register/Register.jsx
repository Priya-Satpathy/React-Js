import React, { useState } from 'react'
import './Register.css'
const Register = ({goToLogin}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const handleRegister = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleClear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <h2>Register Page</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleClear}>Clear</button>
      </div>
     <p>
        Already have an account?{" "}
        <span onClick={goToLogin}>
          Login
        </span>
      </p>
      
    </div>
  )
}

export default Register

import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const[msg,setMsg] = useState('')
    function handleChange(){
        if(email !== ''&& pass !== '' ){
            setMsg("Login Sucessful")
        }else{
            setMsg("please feel all fields ")
        }
    }
  return (
    <div>
      <input type="text"value={email} placeholder='Enter Your Name'onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" value={pass} placeholder='Enter Your Password' onChange={(e)=>setPass(e.target.value)} />
      <button onClick={handleChange}>Submit</button>
      <p>{msg}</p>
    </div>
  )
}

export default Login

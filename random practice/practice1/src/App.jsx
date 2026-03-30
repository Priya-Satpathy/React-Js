import { useState } from "react"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import "./App.css";


function App() {
  
  const[page,setPage] = useState("register")
  return (
    <>
     {page === "register" ? (
        <Register goToLogin={() => setPage("login")} />
      ) : (
        <Login goToRegister={() => setPage("register")} />
      )}
    </>
  )
}

export default App

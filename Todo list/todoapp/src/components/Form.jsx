import React from 'react'

const Form = () => {
   const[todo,setToddo] = useState("");
  
   function handleSubmit(e){
    e.preventDefault();
    setToddos([...todos,todo]);
    setToddo("");
}
  return (
    <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e)=>setToddo(e.target.value)}/>
            <button type='submit'>ADD</button>
      </form>
      
    </div>
  )
}

export default Form

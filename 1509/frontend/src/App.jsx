import { useState } from "react";


function App() {
  const[count,setCount] = useState(0);
  const[val,setVal] = useState(1);

  function handleChange(e){
      console.log(e.target.value);
      setVal(e.target.value);
  }

  return (
    <>
    <input type="text" value= {val} onChange={handleChange}/>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count + Number(val))}>Increase</button>
    </>
  );
}

export default App;

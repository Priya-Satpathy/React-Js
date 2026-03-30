import StudentDetails from "./components/Student";

function App() {
const data = {
   roll : 101,
   name : "Ram",
  marks : [50 ,80 ,90],
};
  return (
 
    <StudentDetails studentData = {data}/>
  )
}

export default App;

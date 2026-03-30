
// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <Greetings/>
//     </>
//   );
// }
// function Greetings(){
//   return (
//     <h1>Hello to Web World</h1>
//   );
// }
// export default App;

import Greetings from "./components/Greetings";
import Address from "./components/Address";

function App() {
  return (
    <>
     <Greetings/>
      <Address/>
    </>
  );
}
export default App;

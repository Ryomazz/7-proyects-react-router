import { Link } from "react-router-dom";

function App() {
   return (
      <div>
         <h1>React Router Simple App</h1>
         <Link to="/home">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
      </div>
   );
}
export default App;

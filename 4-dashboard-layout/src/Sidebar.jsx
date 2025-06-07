import { Link } from "react-router-dom";

function Sidebar() {
   return (
      <div>
         <h1>Sidebar</h1>
         <Link to="/">App</Link>
         <br />
         <Link to="settings">settings</Link>
         <br />
         <Link to="">Dashboard Home</Link>
      </div>
   );
}
export default Sidebar;

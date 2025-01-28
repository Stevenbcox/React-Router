import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      &nbsp;
      <Link to="/blue">Blue</Link>
      &nbsp;
      <Link to="/red">Red</Link>
      &nbsp;
      <Link to="/purple">Purple</Link>
    </div>
  );
}

export default NavBar;

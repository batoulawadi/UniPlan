import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <Link className="navbar-brand" to="/">
          UniPlan
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/courses">Courses</Link>
          <Link className="nav-link" to="/schedule">Schedule</Link>
          <Link className="nav-link" to="/tasks">Tasks</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
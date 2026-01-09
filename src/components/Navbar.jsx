//
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🔶Online Library 📖
      </Link>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Browse Books</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
      </div>
    </nav>
  );
}

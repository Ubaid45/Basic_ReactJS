import React from "react";

// Stateless functional component
const Navbar = ({totalCount}) => {
    console.log("Navbar - rendered");
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar {" "}
            <span className="badge badge-pill badge-secondary">
              {totalCount}
            </span>
  
          </a>
        </nav>
      );
}


export default Navbar;

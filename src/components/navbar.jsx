import React, { Component } from "react";

// Stateless functional component
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar {" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCount}
            </span>
  
          </a>
        </nav>
      );
}


export default Navbar;

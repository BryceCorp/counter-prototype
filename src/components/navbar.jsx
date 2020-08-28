import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand" href="#">
          Items in Basket <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
 
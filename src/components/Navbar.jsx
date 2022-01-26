import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="nav_bar">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="bar_logo">PAK-News</label>
          <ul>
            <li>
              <a className="active" href="/pak-news">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;

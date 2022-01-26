import React from "react";
import { NavLink,  } from "react-router-dom";

const Error = () => {

  return (
    <>
      <div className="setstyle1">
      <b>Sorry! This page doesn't exist</b>
        <h1>404 Error Page!</h1>
       
        <NavLink to="/pak-news" className="btn-get-started" >Go Back </NavLink>
      </div>

    </>
  )
}
export default Error;
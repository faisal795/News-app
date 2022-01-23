import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Error = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className="setstyle1">
      <b>Sorry! This page doesn't exist</b>
        <h1>404 Error Page!</h1>
       
        <NavLink to="/pak-news" className="btn-get-started" onClick={() => navigate('/pak-news')}>Go Back </NavLink>
      </div>

    </>
  )
}
export default Error;
import React, { Component } from "react";
import spinner from "../img/Dual Ring-0.6s-71px.gif";
export default class Spinner extends Component {
  render() {
    const spinner_style = {
      textAlign: "center",
      position: "absolute",
      top: "50%",
      
      zIndex: '10'
    };
    const spin_img = {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)'
    }
    
    return (
      <>
        <div style={spinner_style}>
          <img src={spinner} alt="Loading..." style={spin_img} />
        </div>
      </>
    );
  }
}

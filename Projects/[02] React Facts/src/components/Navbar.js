import React from "react"
import logo from "../images/React-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React-logo" className="nav--image"></img>
            <h3 className="nav--logo__text">ReactFacts</h3>
            <h4 className="nav--title">React Course-Project</h4>
        </nav>
    )
    
    
}
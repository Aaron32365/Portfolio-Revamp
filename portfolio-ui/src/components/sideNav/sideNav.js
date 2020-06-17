import React, {useState} from "react"
import { NavLink, useHistory } from "react-router-dom";

export default function SideNav(){

    const [navState, setNavState] = useState("0")

    function closeNav(){
      setNavState("250px")
    }

    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <NavLink to="#" class="closebtn" onclick={closeNav()}></NavLink>
                <NavLink to="/Portfolio" activeClassName="selected">Portfolio</NavLink>
                <NavLink to="/About" activeClassName="selected">Services</NavLink>
                <NavLink to="/Contact" activeClassName="selected">Contact</NavLink>
            </div>
        </div>
    )
}
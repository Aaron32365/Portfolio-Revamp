import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import "./sideNav.css"

export default function SideNav(){

    const [navState, setNavState] = useState({
        width: "0px"
    })

    function closeNav(){
        setTimeout(() => {
            setNavState({...navState, width: "0px"})
            console.log("Closing Sidenav...")
        }, 400);
      }

      function openNav(){
        setNavState({...navState, width: "250px"})
        console.log("Opening Sidenav...")
      }
  
    return (
        <div>
            <div className="navbtn">
                <div id="marginTop">
                    <span id="navBtnId" className="shadow" style={{cursor:"pointer", fontSize: "50px", width: "400px"}} onClick={openNav}>&#9776;</span>
                </div>
            </div>
            <div className="sidenavs one-edge-shadow" id="mySidenav" style={{width: navState.width}}>

                <NavLink to="#" className="closebtn" onClick={closeNav}>x</NavLink>
                <div className="row justify-content-center">
                    {/* <div className="col-fluid"> */}
                        <img className="shadow bigger roundedImage" src={require('./images/self.jpg')} alt="self"/>
                    {/* </div> */}
                </div>
                <div className="row justify-content-center">
                    <div className="col-fluid">
                        <NavLink className="nav-item" to="/Portfolio" onClick={closeNav} activeClassName="selected">Portfolio</NavLink>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-fluid">
                        <NavLink className="nav-item" to="/About" onClick={closeNav} activeClassName="selected">About</NavLink>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-fluid">
                        <NavLink className="nav-item" to="/Contact" onClick={closeNav} activeClassName="selected">Contact</NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
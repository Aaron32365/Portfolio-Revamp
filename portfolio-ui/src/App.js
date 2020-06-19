import React, { useState } from 'react';
import './App.css';
import SideNav from "./components/sideNav/sideNav.js"
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"; //edited file
// import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio/index"
function App() {

  return (
    <div className="App">
      <Router >
        <SideNav/>
        <Route exact path="/">
          <Redirect to="/Portfolio"/>
        </Route>
        <Route exact path="/Portfolio" component={Portfolio}/>
        {/** add in  auto reroute to /Portfolio by default -- portfolio is main page*/}
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import SideNav from "./components/sideNav/sideNav.js"
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"; //edited file
// import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio/index"
import About from "./pages/About/Index"
import Contact from "./pages/Contact/index"
function App() {

  return (
    <div className="App">
      <Router >
        <SideNav/>
        <Route exact path="/">
          <Redirect to="/Portfolio"/>
        </Route>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
      </Router>
    </div>
  );
}

export default App;

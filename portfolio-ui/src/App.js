import React from 'react';
import './App.css';
import SideNav from "./components/sideNav/sideNav.js"
import { BrowserRouter as Router, Route} from "react-router-dom"; //edited file
import Home from "./pages/Home"

function App() {

  return (
    <div className="App">
      <Router>
        <SideNav/>
        <Route exact path="/" component={Home}/>{/** add in  auto reroute to /Portfolio by default -- portfolio is main page*/}
      </Router>
    </div>
  );
}

export default App;

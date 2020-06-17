import React from 'react';
import './App.css';
import SideNav from "./components/sideNav/sideNav"
import { BrowserRouter as Router, Route} from "react-router-dom"; //edited file
import Home from "./pages/Home"

function App() {

  return (
    <div className="App">
      <Router>
        {/* <SideNav/> */}
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;

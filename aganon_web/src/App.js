import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Initial from "./pages/InitialPage.js";
import Header from "./pages/Header.js";
import logo from "./logo.svg";
// import Leftbar from "./pages/Leftbar";
import MapContainer from "./pages/Map.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Initial/> */}
      {/* <Router> */}
          {/* <Leftbar /> */}
          {/* <Switch>
            <Route exact path="/" component={Initial} /> */}
            {/* <Route exact path="/ict" component={ICTpage} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/infrastructure" component={Infrastructure} />
            <Route exact path="/economy" component={Economy} />
            <Route exact path="/emergency" component={Emergency} /> */}
            {/* <Redirect to="/" />
          </Switch>
        </Router> */}
      {/* <div className="Body"> */}
        
      {/* </div> */}
    </div>
  );
}

export default App;




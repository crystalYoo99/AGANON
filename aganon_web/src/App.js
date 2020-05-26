import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Initial from "./pages/InitialPage";
import Header from "./pages/Header";
import logo from "./logo.svg";
import Leftbar from "./pages/Leftbar";
import MapContainer from "./pages/Map.js";
import Infrastructure from "./pages/InfrastructurePage.js";
import ICTpage from "./pages/ICTPage.js";
import Mission from "./pages/MissionPage.js";
import Economy from "./pages/EconomyPage.js";
import Emergency from "./pages/EmergencyPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Router>
          <Leftbar />
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route exact path="/ict" component={ICTpage} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/infrastructure" component={Infrastructure} />
            <Route exact path="/economy" component={Economy} />
            <Route exact path="/emergency" component={Emergency} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

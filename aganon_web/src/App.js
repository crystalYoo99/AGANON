import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import Initial from "./pages/InitialPage.js";
import Header from "./pages/Header.js";
//import logo from "./logo.svg";
import ICTpage from "./pages/menu/ICTPage.js";
//import ICTpage from "./pages/menu/ICTPage.js";
// import Leftbar from "./pages/Leftbar";
//import MapContainer from "./pages/Map.js";
import mainListItems from "./pages/listitems.js";
import "./App.css";
import NationForm from "./pages/NationForm.js";

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      {/*<Initial />*/}
      <Router>
        <mainListItems />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/ict" component={ICTpage} />
          <Route exact path="nation" component={NationForm} />
          {/*
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/infrastructure" component={Infrastructure} />
          <Route exact path="/economy" component={Economy} />
          <Route exact path="/emergency" component={Emergency} />
  */}
          <Redirect to="/" />
        </Switch>
      </Router>
      {/*<div className="Body">*/}
    </div>
  );
}

export default App;

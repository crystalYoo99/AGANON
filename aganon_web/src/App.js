import React from "react";
import { Initial } from "./pages/InitialPage";
import Header from "./pages/Header";
import logo from "./logo.svg";
import Leftbar from "./pages/Leftbar";
import MapContainer from "./pages/Map.js";

import "./App.css";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState("true");

  function sidebarExpanded(e) {
    return (
      <div className="sidebar">
        <span role="presentation" onClick={() => setIsSidebarExpanded(false)}>
          <div className="sidebar_title">Close Sidebar</div>
        </span>
        <ul class="sidebar_menu">
          <li>ECONOMY</li>
          <li>ICT</li>
          <li>MISSION</li>
          <li>INFRASTRUCTURE</li>
        </ul>
      </div>
    );
  }
  function sidebarCollapsed(e) {
    return (
      <div className="sidebar collapsed">
        <span role="presentation" onClick={() => setIsSidebarExpanded(true)}>
          <div className="sidebar_title">Sidebar</div>
        </span>
        {/*<ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        */}
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <div>
          {/*{isSidebarExpanded && sidebarExpanded()}
          {isSidebarExpanded || sidebarCollapsed()}
  */}
        </div>
        <Leftbar />
        <div className="content">
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

export default App;

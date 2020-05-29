import React from "react";
// import Header from "./Header";
import MapContainer from "./Map.js";
import Header from "./Header";
import "../App.css";

export default function InitialPage() {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState("true");


  return (
    <div className="content">
      <MapContainer />
    </div>
  );
}

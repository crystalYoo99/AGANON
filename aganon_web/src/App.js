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
<<<<<<< Updated upstream
import NationForm from "./pages/NationForm.js";
=======
//import NationForm from "./pages/menu/NationForm.js";
import ClimatePage from "./pages/menu/ClimatePage.js";
import CapitalPage from "./pages/menu/CapitalPage.js";
import CityPage from "./pages/menu/CityPage.js";
import DiseasePage from "./pages/menu/DiseasePage.js";
import EconomyPage from "./pages/menu/EconomyPage.js";
import EducationPage from "./pages/menu/EducationPage";
import Emergency_infoPage from "./pages/menu/Emergency_infoPage";
import EnergyPage from "./pages/menu/EnergyPage";
import GorvtypePage from "./pages/menu/Gorv._TypePage";
import InfrastructurePage from "./pages/menu/InfrastructurePage";
import LanguagePage from "./pages/menu/LanguagePage";
import Literacy_ratePage from "./pages/menu/Literacy_ratePage";
import MissionaryPage from "./pages/menu/MissionaryPage";
import Mission_SchoolPage from "./pages/menu/Mission_schoolPage";
//import Nation_M_SchoolPage from "./pages/menu/Nation_M_SchoolPage";
import PopulationPage from "./pages/menu/PopulationPage";
import Religious_ratioPage from "./pages/menu/Religious_ratioPage";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          <Route exact path="nation" component={NationForm} />
=======
          <Route exact path="/nation" component={NationPage} />
          <Route exact path="/capital" component={CapitalPage} />
          <Route exact path="/city" component={CityPage} />
          <Route exact path="/climate" component={ClimatePage} />
          <Route exact path="/disease" component={DiseasePage} />
          <Route exact path="/economy" component={EconomyPage} />
          <Route exact path="/education" component={EducationPage} />
          <Route exact path="/emergency-info" component={Emergency_infoPage} />
          <Route exact path="/energy" component={EnergyPage} />
          <Route exact path="/gorv._type" component={GorvtypePage} />
          <Route exact path="/infrastructure" component={InfrastructurePage} />
          <Route exact path="/language" component={LanguagePage} />
          <Route exact path="/literacy_rate" component={Literacy_ratePage} />
          <Route exact path="/missionary" component={MissionaryPage} />
          <Route exact path="/mission_school" component={Mission_SchoolPage} />
          <Route exact path="/population" component={PopulationPage} />
          <Route exact path="/religious_ratio" component={Religious_ratioPage} />

>>>>>>> Stashed changes
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

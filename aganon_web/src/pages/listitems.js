import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LayersIcon from '@material-ui/icons/Layers';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import OpacityIcon from '@material-ui/icons/Opacity';
import SchoolIcon from '@material-ui/icons/School';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import BatteryCharging80Icon from '@material-ui/icons/BatteryCharging80';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ExploreIcon from '@material-ui/icons/Explore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// import { Link } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
//  import Link from '@material-ui/core/Link';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// import { Link as RouterLink } from 'react-router-dom';


export const mainListItems = (
  <div>
    <ListItem button>
      {/* <Link component={RouterLink} to="/emergency">  */}
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        {/* <ListItemText primary="Capital" /> */}
        <ListItemText primary="Capital" />
      {/* </Link> */}
    </ListItem>

    {/* <Link component={RouterLink} to="/about-us">
						<ListItemText inset primary="About Us" />
					</Link> */}

    <ListItem button>
      <ListItemIcon>
        <LocationCityIcon />
      </ListItemIcon>
      <ListItemText primary="City" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <OpacityIcon />
      </ListItemIcon>
      <ListItemText primary="Climate" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Disease" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Economy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BorderColorIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddIcCallIcon />
      </ListItemIcon>
      <ListItemText primary="Emergency-info" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BatteryCharging80Icon />
      </ListItemIcon>
      <ListItemText primary="Energy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Gorv._Type" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Health" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ComputerIcon />
      </ListItemIcon>
      <ListItemText primary="ICT" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AirplanemodeActiveIcon />
      </ListItemIcon>
      <ListItemText primary="Infrastructure" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LanguageIcon />
      </ListItemIcon>
      <ListItemText primary="Language" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TranslateIcon />
      </ListItemIcon>
      <ListItemText primary="Literacy_rate" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Missionary" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Mission_school" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Nation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Nation_Capital" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Nation_Language" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Nation_Missionary" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Nation_M_School" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Population" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LoyaltyIcon />
      </ListItemIcon>
      <ListItemText primary="Religious_ratio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsWalkIcon />
      </ListItemIcon>
      <ListItemText primary="Symptom" />
    </ListItem>
  </div>
);


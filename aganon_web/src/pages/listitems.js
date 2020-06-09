import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LayersIcon from "@material-ui/icons/Layers";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import OpacityIcon from "@material-ui/icons/Opacity";
import SchoolIcon from "@material-ui/icons/School";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ComputerIcon from "@material-ui/icons/Computer";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import TranslateIcon from "@material-ui/icons/Translate";
import LanguageIcon from "@material-ui/icons/Language";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ExploreIcon from "@material-ui/icons/Explore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PeopleIcon from "@material-ui/icons/People";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import lime from "@material-ui/core/colors/lime";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: blueGrey[900],
    // marginRight: theme.spacing(5),
    padding: theme.spacing(1.5)
  },
  icon: {
    // color:green[100],
    color: lime[900],
    fontSize: 35,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(-0.8)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: "Times New Roman",
    //fontFamily: "sans-serif",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
    // '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // textDecorationSkip:'none',
    // textDecoration:FaBorderNone,
    // text-decoration: none,
    // color: green,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function MainListItems() {
  const [toggle, setToggle] = React.useState(false);
  const classes = useStyles();

  function handleDrawerToggle() {
    setToggle(t => !t);
  }
  return (
    <div>
      <IconButton
        onClick={handleDrawerToggle}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <div className="menu">
        <Drawer variant="temporary" open={toggle}>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div>
            <ListItem button component={Link} to="/capital">
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Capital" />
            </ListItem>

            <ListItem button component={Link} to="/city">
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="City" />
            </ListItem>
            <ListItem button component={Link} to="/climate">
              <ListItemIcon>
                <OpacityIcon />
              </ListItemIcon>
              <ListItemText primary="Climate" />
            </ListItem>
            <ListItem button component={Link} to="/disease">
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary="Disease" />
            </ListItem>
            <ListItem button component={Link} to="/economy">
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Economy" />
            </ListItem>
            <ListItem button component={Link} to="/education">
              <ListItemIcon>
                <BorderColorIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button component={Link} to="/emergency-info">
              <ListItemIcon>
                <AddIcCallIcon />
              </ListItemIcon>
              <ListItemText primary="Emergency-info" />
            </ListItem>
            <ListItem button component={Link} to="/energy">
              <ListItemIcon>
                <BatteryCharging80Icon />
              </ListItemIcon>
              <ListItemText primary="Energy" />
            </ListItem>
            <ListItem button component={Link} to="/gorv._type">
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Gorv._Type" />
            </ListItem>
            <ListItem button component={Link} to="/health">
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Health" />
            </ListItem>
            <ListItem button component={Link} to="/ict">
              <ListItemIcon>
                <ComputerIcon />
              </ListItemIcon>
              <ListItemText primary="ICT" />
            </ListItem>
            <ListItem button component={Link} to="/infrastructure">
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary="Infrastructure" />
            </ListItem>
            <ListItem button component={Link} to="/language">
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Language" />
            </ListItem>
            <ListItem button component={Link} to="/literacy_rate">
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
          <Divider />
        </Drawer>
      </div>
    </div>
  );
}

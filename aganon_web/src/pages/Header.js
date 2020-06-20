import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NationForm from "./NationForm.js";
import { Drawer } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

// import { MemoryRouter as Router } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import MainListItems from "./listitems";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InitialPage from "./InitialPage";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
// import { green } from '@material-ui/core/colors';
// import { black } from '@material-ui/core/colors';
import { FaGlobeAfrica, FaBorderNone } from "react-icons/fa";
import PublicIcon from "@material-ui/icons/Public";
import CapitalPage from "./CapitalPage";
import Comoros from "./nation/Comoros";

import blueGrey from "@material-ui/core/colors/blueGrey";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import lime from "@material-ui/core/colors/lime";

// const primary = blueGrey[900]; // #F44336
// const accent = purple['A200']; // #E040FB
// const accent = purple.A200;

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
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Times New Roman",
    //fontFamily: "sans-serif",
    display: "none",
    paddingLeft: theme.spacing(60),
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
    // marginLeft: 0,
    width: "100%",
    // paddingLeft: theme.spacing(30),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(60),
      width: "auto"
    }
  },
  // searchIcon: {
  //   // padding: theme.spacing(0, 2),
  //   paddingLeft: theme.spacing(30),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   // alignItems: "center",
  //   // justifyContent: "center"
  // },
  inputRoot: {
    color: "inherit"
  }
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "12ch",
  //     "&:focus": {
  //       width: "20ch"
  //     }
  //   }
  // }
}));

export default function Header() {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [close, setClose] = React.useState(true);
  const [selectedCountry, setSelectedCountry] = React.useState();
  // const country = ["Angola", "Botswana", "Comoros"];
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleToggle() {
    setToggle(t => !t);
  }

  // let countryList =
  //   country.length > 0 &&
  //   country.map((item, i) => {
  //     return <option key={i}>{item}</option>;
  //   }, this);

  // function countrySelected(selectedCountry) {
  //   setSelectedCountry(selectedCountry);
  //   return (
  //     <div>
  //       <div>{selectedCountry}</div>
  //       <Link to="/nation" />
  //     </div>
  //   );
  // }
  return (
    <div className={classes.root}>
      <primary />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <MainListItems />
          {/*<IconButton
            onClick={handleToggle}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className="menu">
            <Drawer variant="temporary" open={toggle}>
              {/* <Router>
            <div>
              <Button color="primary" component={RouterLink} to="/economy" onClick={handleToggle}>
                Economy
              </Button>
              <br />
              <Button color="primary" component={RouterLink} to="/economy">
                Mission
              </Button>
            </div>
              </Router>*/}
          {/*}
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              {/* <List>{mainListItems}</List>
              {MainListItems}
              <Divider />
            </Drawer>
          </div>
          */}
          {/* <Icon className="fa fa-plus-circle" style={{ color: green[500] }} /> */}
          <Button>
            <Typography className={classes.title} variant="h4" noWrap>
              <PublicIcon className={classes.icon} />
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Aganon
              </Link>
            </Typography>
          </Button>

          {/* <a href=""><FaGlobeAfrica />  AGANON</a>
          {/* <div className={classes.title} variant="h6" noWrap>
            <a href=""><FaGlobeAfrica />  AGANON</a>
          </div> */}
          <div className={classes.search}>
            {/*}
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
        */}
            {/*
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
            */}
            {/*<select onChange={countrySelected} defaultValue="default">*/}

            {/* <select onChange={value => countrySelected(value)}>
              <option value="default" disabled style={{ color: "#ccc" }}>
                {"select country"}
              </option>
              {countryList}
            </select> */}
          </div>
        </Toolbar>
      </AppBar>
      {/*
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Comoros />
        </Container>
      </main>
      */}
    </div>
  );
}

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "../MainFeaturedPost";

// import React from 'react';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import blueGrey from "@material-ui/core/colors/blueGrey";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import brown from "@material-ui/core/colors/brown";
import Button from "@material-ui/core/Button";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const mainFeaturedPost = {
  title: "SYMPTOM",
  imgText: "main image description"
};

const useStyles = makeStyles(theme => ({
  base: {
    backgroundColor: blueGrey[400]
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  checks: {
    justifyContent: "left",
    alignItems: "left",
    marginBottom: 0,

    root1: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    },

    root2: {
      flexGrow: 1
    },
    paper2: {
      // padding: theme.spacing(2),
      marginTop: theme.spacing(40),
      // margin: 'auto',
      maxWidth: 500
    },
    image2: {
      width: 128,
      height: 128
    },
    img2: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    },

    root3: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1)
      // fontFamily:"Roboto"
      // fontFamily : "Times New Roman"
    },
    row1: {
      flexDirection: "row"
    },

    button4: {
      margin: theme.spacing(1),
      marginRight: theme.spacing(3)
    },

    label4: {
      marginLeft: theme.spacing(5)
    },

    root5: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    list5: {
      // flexDirection:'row'
      padding: theme.spacing(30)
    },
    divide5: {
      marginTop: theme.spacing(30)
    },
    section5: {
      margin: theme.spacing(6)
    },

    listtext5: {
      color: brown[300]
    },

    root6: {
      "& > *": {
        margin: theme.spacing(1)
      },
      buttoncolor: {
        backgroundColor: blueGrey[900],
        marginTop: theme.spacing(5)
      }
    }
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function SymptomPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false
  });

  const handleChange2 = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <CssBaseline className={classes.base} />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
      <div>
        <List className={classes.root5}>
          <div className={classes.section5}>
            <ListItem className={classes.list5}>
              <ListItemText className={classes.listtext5} primary="NATION" />
            </ListItem>
            <FormGroup row className={classes.checks}>
              <FormControlLabel control={<Checkbox name="checked1" />} label="Comoros" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked2" />} label="Djibouti" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked3" />} label="Eritrea" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked4" />} label="Ethiopia" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked5" />} label="Kenya" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked6" />} label="Seychelles" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked7" />} label="Somalia" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked8" />} label="Somaliland" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked9" />} label="Tanzania" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked10" />} label="Angola" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked11" />} label="Botswana" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked12" />} label="Eswatini" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked13" />} label="Lesotho" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked14" />} label="Madagascar" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked15" />} label="Malawi" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked16" />} label="Mauritius" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked17" />} label="Mozambique" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked18" />} label="Namibia" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked19" />} label="South Africa" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked20" />} label="Zambia" onChange={handleChange2} />
              <FormControlLabel control={<Checkbox name="checked21" />} label="Zimbabwe" onChange={handleChange2} />
            </FormGroup>
          </div>
          <div className={classes.section5}>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemText className={classes.listtext5} primary="ATTRIBUTE" />
            </ListItem>
            <FormGroup row className={classes.checks}>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="symptom id"
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" />}
                label="discription"
              />
            </FormGroup>
          </div>
        </List>

        <div className={classes.root6}>
          <Button className={classes.buttoncolor} variant="contained">
            SHOW RESULTS
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

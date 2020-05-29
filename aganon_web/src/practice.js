

import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../Leftbar.css";
import React from "react";

export default function Leftmenu() {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(t => !t);
  }

  return (
    <React.Fragment>
      <div className="leftbar">
        <IconButton color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <div className="menu">
        <Drawer open={toggle}>
          <MenuItem component={Link} to="/economy" onClick={handleToggle}>
            Economy
          </MenuItem>
          <MenuItem component={Link} to="/mission" onClick={handleToggle}>
            Mission
          </MenuItem>
          <MenuItem
            component={Link}
            to="/infrastructure"
            onClick={handleToggle}
          >
            Infrastructure
          </MenuItem>
          <MenuItem component={Link} to="/ict" onClick={handleToggle}>
            ICT
          </MenuItem>
          <MenuItem component={Link} to="/emergency" onClick={handleToggle}>
            Emergency
          </MenuItem>
        </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
}




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}




import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

export default function ButtonRouter() {
  return (
    <Router>
      <div>
        <Button color="primary" component={RouterLink} to="/">
          With prop forwarding
        </Button>
        <br />
        <Button color="primary" component={LinkBehavior}>
          Without prop forwarding
        </Button>
      </div>
    </Router>
  );
}







import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../Leftbar.css";
import React from "react";

export default function Leftmenu() {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(t => !t);
  }

  return (
    <React.Fragment>
      <div className="leftbar">
        <IconButton color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <div className="menu">
        <Drawer open={toggle}>
          <MenuItem component={Link} to="/economy" onClick={handleToggle}>
            Economy
          </MenuItem>
          <MenuItem component={Link} to="/mission" onClick={handleToggle}>
            Mission
          </MenuItem>
          <MenuItem
            component={Link}
            to="/infrastructure"
            onClick={handleToggle}
          >
            Infrastructure
          </MenuItem>
          <MenuItem component={Link} to="/ict" onClick={handleToggle}>
            ICT
          </MenuItem>
          <MenuItem component={Link} to="/emergency" onClick={handleToggle}>
            Emergency
          </MenuItem>
        </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
}




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
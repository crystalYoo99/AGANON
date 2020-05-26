import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import React from "react";

export default function Leftmenu() {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(t => !t);
  }

  return (
    <React.Fragment>
      <div>
        <IconButton color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <Drawer open={toggle}>
          <MenuItem component={Link} to="/economy" onClick={handleToggle}>
            Economy
          </MenuItem>
          <MenuItem onClick={handleToggle}>Mission</MenuItem>
          <MenuItem onClick={handleToggle}>Infrastructure</MenuItem>
          <MenuItem onClick={handleToggle}>ICT</MenuItem>
          <MenuItem onClick={handleToggle}>Emergency</MenuItem>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

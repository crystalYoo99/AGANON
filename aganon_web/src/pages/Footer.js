import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    align: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 0),
    flexDirection: "row"
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    align: "center"
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        {/* <Typography variant="h6"  gutterBottom>
          AGANON
        </Typography>
        
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {description}
        </Typography> */}
        {/* <Copyright /> */}
        <div className={classes.root}>
          <Typography variant="h6" gutterBottom>
            Developers
          </Typography>
          <div>
            <Avatar
              alt="Kang Suk-un"
              src="/images/Nation.jpeg"
              className={classes.large}
            />
            <div>Kang</div>
            <div>Suk-un</div>
          </div>

          <div>
            <Avatar
              alt="Kim Jisu"
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />
            <div>Kim</div>
            <div>Jisu</div>
          </div>
          <div>
            <Avatar
              alt="Yoo Sujeong"
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />
            <div>Yoo</div>
            <div>Sujeong</div>
          </div>
          <Avatar
            alt="Lee Hyerim"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

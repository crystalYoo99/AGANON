import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import nation1 from "../images/headImage.jpg";
// import Background form

import teal from "@material-ui/core/colors/teal";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    // backgroundColor: theme.palette.grey[800],
    //   backgroundColor:teal[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4), //8
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
    //width:'111%'
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6), //1
      //padding:eft:'-30%'
      paddingRight: 0
    }
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${nation1})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />

      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
          </div>
          <Typography variant="h5" color="inherit" paragraph>
            {post.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object
};

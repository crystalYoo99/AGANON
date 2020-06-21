import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import africamap from "../images/africamap.png";
import headImage from "../images/headImage.jpg";
import mainImage from "../images/aganonMain.png";

const useStyles = makeStyles({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 220
  }
});

export default function FeaturedPost2(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={18}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <br />
            <Typography variant="overline" paragraph>
              {post.description}
            </Typography>
            <Typography variant="overline" paragraph>
              {post.description2}
            </Typography>
            <Typography variant="overline" paragraph>
              {post.description3}
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={mainImage}
            title={post.imageTitle}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

FeaturedPost2.propTypes = {
  post: PropTypes.object
};

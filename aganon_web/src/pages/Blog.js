import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import InitialFeaturedPost from "./InitialFeaturedPost";
import FeaturedPost2 from "./FeaturedPost2";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
// import Sidebar from './Sidebar';
import Footer from "./Footer";
import jisu from "../images/jisu.jpeg";
import africamap from "../images/africamap.png";
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" }
];

const initialFeaturedPost = {
  //   title: 'AGANON',
  description:
    '"Four people who have never been to Africa, discuss African missions"',
  image: "../images/aboutImage.jpg",
  imgText: "main image description"
  //   linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: "About",
    date: "AGANON",
    description:
      "This website provides information about Southeast Africa mission in various fields, ",
    description3:
      "including basic information, population, economy, religion, education and industry.",
    description2:
      "Therefore, it provides convenience when missionaries who are preparing to go to mission work and people interested in Africa collect data.",
    image: "../images/africamap",
    imageText: "Image Text"
  }
];
const featuredPosts2 = [
  {
    title: "How To Use",
    date: "AGANON",
    description: "1. First, click on the menu bar at the top left.",
    description2: "2. Click on the menu you want from the menu.",
    description3:
      "3. On the page of each menu, you can select the country, condition, etc. for which you want information.",
    image: "../images/aganonMain",
    imageText: "Image Text"
  }
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}

        <main>
          <div>
            <InitialFeaturedPost post={initialFeaturedPost} />
          </div>
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>

          <Grid container spacing={4}>
            {featuredPosts2.map(post => (
              <FeaturedPost2 key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer title="AGANON" description="Developers" />
    </React.Fragment>
  );
}

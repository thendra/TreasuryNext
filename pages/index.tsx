import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Typography from "@material-ui/core/Typography";
import { withApollo } from "../lib/withApollo";
import React from "react";
import { Box, Button, Hidden, makeStyles, Theme } from "@material-ui/core";
import { useFetchUser } from "../lib/user";
import LoginButton from "../components/LoginButton";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    display: "flex",
    color: "#fff",
  },
  media: {
    height: 200,
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    backgroundColor: "#38302e",
    "& span": {
      color: "#fff",
    },
  },
  landingImage: {
    marginRight: "-20px",
    width: "calc(50% + 20px)",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      marginRight: 0,
    },
    height: "100vh",
    right: 0,
    top: 0,
    backgroundImage: "url(images/camera.jpg)",
    backgroundSize: "cover",
  },
}));

const Home = () => {
  const { user } = useFetchUser();
  const classes = useStyles();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box display="flex" flexWrap="wrap">
        <Box
          flex="1"
          padding={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxWidth="500px">
            <Box paddingBottom="50px">
              <Typography variant="h1" align="left">
                Treasury
              </Typography>
            </Box>
            <Box paddingBottom="50px">
              <Typography variant="h2" align="left">
                Keep track of your collections in one convenient place.
              </Typography>
            </Box>
            {!user ? (
              <Box>
                <LoginButton />
              </Box>
            ) : (
              <>
                <Box
                  marginTop={3}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Typography variant="h2">
                    Welcome back {user?.name} &nbsp;
                  </Typography>
                  <Box paddingY={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        Router.push("/items");
                      }}
                    >
                      View Items
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Hidden smDown>
          <Box className={classes.landingImage} />
        </Hidden>
      </Box>
    </Layout>
  );
};

export default Home;

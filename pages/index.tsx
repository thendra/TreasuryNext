import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Typography from "@material-ui/core/Typography";
import { withApollo } from "../lib/withApollo";
import gql from "graphql-tag";
import React from "react";
import { Box, Hidden, makeStyles, Theme } from "@material-ui/core";
import { useFetchUser } from "../lib/user";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

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

const GET_MY_TODOS = gql`
  query getMyTodos {
    todos(
      where: { is_public: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      id
      title
      created_at
      is_completed
    }
  }
`;

const Home = () => {
  /// TO DO - fix users
  const { user } = useAuth0();

  console.log(user);
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
              <Box display="flex">
                <LoginButton />
              </Box>
            ) : (
              <Typography variant="h2">{user?.name}</Typography>
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

export default withApollo()(Home);

// export const getServerSideProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

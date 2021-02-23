import "../styles/global.css";
import theme from "../src/theme";
import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline, Fab } from "@material-ui/core";
import { withRouter } from "next/router";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import Box from "@material-ui/core/Box";
import AddItemForm from "../components/AddItemForm";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default withRouter(App);

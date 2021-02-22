import "../styles/global.css";
import theme from "../src/theme";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { withRouter } from "next/router";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";

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
      {/* Not sure if this is the right approach */}
      <Auth0Provider
        // domain="dev-mipf43mo.eu.auth0.com"
        domain="dev-axkwk09j.eu.auth0.com"
        // clientId="cAjFZxpGeOuCMXFeNYqT87oQuLL2UgEI"
        clientId="hOCTDn5awbhB03LHo8o6bR1HjWxmGVaG"
        redirectUri="http://localhost:3000/"
        // redirectUri="https://sharp-nobel-706ca3.netlify.app/"
        // audience="https://dev-mipf43mo.eu.auth0.com/api/v2/"
        audience="https://dev-axkwk09j.eu.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Auth0Provider>
    </>
  );
};

export default withRouter(App);

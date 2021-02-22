import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  /// Possibly swap out for example
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() =>
        loginWithRedirect({ redirectUri: "http://localhost:3000" })
      }
    >
      Log In
    </Button>
  );
};

export default LoginButton;

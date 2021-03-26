/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const App = () => {
  const [userId, setUserId] = useState(null);

  /**
   * userId coming from login has the same name as the state variable
   *
   */
  return (
    <div>
      <header>
        <AppBar
          userId={userId}
          onLogin={(userId) => setUserId(userId)}
          onLogout={() => setUserId(null)}
        />
      </header>
      <main>Hello {userId}</main>
    </div>
  );
};

const LoginButton = ({ onLogin }) => {
  // assume we use a 3rd party script to authenticate
  /**
   *
   * useEffect should return window.auth.removeEventListener to clean up
   *
   * The useEffect has no dependency array so if onLogin changes it will not update the eventListener
   */
  useEffect(() => {
    window.auth.addEventListener("user_present", (userId) => onLogin(userId));
  }, []);

  return <button onClick={() => window.auth.login()}>Login</button>;
};

const LogoutButton = ({ onLogout }) => {
  /**
   * useEffect should return window.auth.removeEventListener to clean up
   *
   * The useEffect has no dependency array so if onLogin changes it will not update the eventListener
   *
   * Logout button will be removed from the dom if we change to conditional rendering so will have to re add the event listener - we should take it out of here
   *
   * Buttons have no styling so we dont need them in components
   * */
  useEffect(() => {
    window.auth.addEventListener("user_gone", () => onLogout());
  }, []);

  return <button onClick={() => window.auth.logout()}>Logout</button>;
};

/**
 * App bar should contain logic for onLogin and onLogout as the functionality is used only within this feature
 *
 * As AppBar takes userId as a prop everytime userId changes it will rerender LogoutButton and LoginButton
 */
const AppBar = ({ userId, onLogin, onLogout }) => {
  return (
    <div>
      <div
        id="logged-in-navigation"
        /**
         * Setting the style like this may cause a flicker, better to render it based on userId
         * This will also cause the LogoutButton to be imported and rendered before being hidden, reducing performance
         */
        style={{ display: userId ? "block" : "none" }}
      >
        <a href="/dashboard">Dashboard</a>
        <a href="/my-account">My account</a>
        <LogoutButton onLogout={onLogout} />
      </div>
      <div
        id="logged-out-navigation"
        style={{ display: userId ? "none" : "block" }}
      >
        <LoginButton onLogin={onLogin} />
      </div>
    </div>
  );
};

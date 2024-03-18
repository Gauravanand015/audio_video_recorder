import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import RecContextProvider from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecContextProvider>
      <App />
    </RecContextProvider>
  </React.StrictMode>
);

let loggedInUserDetails = [
  ...specificUserInterests,
  userDetails.zodiac,
  userDetails.chakra,
  userDetails.sexualorientation,
  userDetails.interestedin,
  userDetails.religiouscompatibility,
  userDetails.senseofhumour,
];

let allUserDetailsOneByOne = [
  ...userInterests,
  user.zodiac,
  user.chakra,
  user.sexualorientation,
  user.interestedin,
  user.religiouscompatibility,
  user.senseofhumour,
];

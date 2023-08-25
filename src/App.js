import React, { useState } from "react";

import "./App.css";
import Login from "./components/login/login";
import CustomerRegistration from "./components/customer registration/customerRegistrstion";
import ProfileRegistration from "./components/profile registratio/profileRegistration";

function App() {
  return (
    <div className="App">
      <Login />
      <CustomerRegistration />
      <ProfileRegistration />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";
import Login from "./components/login/login";
import CustomerRegistration from "./components/customer registration/customerRegistrstion";

function App() {
  return (
    <div className="App">
      <Login />
      <CustomerRegistration />
    </div>
  );
}

export default App;

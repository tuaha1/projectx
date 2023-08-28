import React, { useState } from "react";

import "./App.css";
import Login from "./components/login/login";
import CustomerRegistration from "./components/customer registration/customerRegistrstion";
import ProfileRegistration from "./components/profile registratio/profileRegistration";

function App() {
  return (
    <div className="App">
      <div class="bg-[#181028] flex justify-center items-center min-h-screen ">
        <div class=" bg-white p-4 rounded-xl m-24">
          <div class="flex space-x-4 ">
            <div class="flex-shrink-0 w-1/3 shadow border rounded p-4 text-left">
              <h1 className="text-xl"></h1>
              <Login />
            </div>

            <div class="flex-shrink-0 w-1/3 shadow border rounded p-4">
              <CustomerRegistration />
            </div>
            <div class="flex-shrink-0 w-1/3 shadow border rounded p-4">
              <ProfileRegistration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

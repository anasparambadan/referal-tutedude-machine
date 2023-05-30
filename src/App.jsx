import React from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ReferalInfo from "./components/referalInfo/ReferalInfo";
import ReferalCode from "./components/referalCode/ReferalCode";
import SiteNav from "./components/siteNav/SiteNav";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <SiteNav />
          <div className="referal">
            <Dashboard />
            <ReferalCode />
          </div>
          <div className="ref-info">
            <ReferalInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

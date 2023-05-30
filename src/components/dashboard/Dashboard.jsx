import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="card">
      <div className="frame">
        <span className="title">Referral Earning</span>
        <span className="content">₹ 2,500</span>
      </div>
      <div className="frame">
        <span className="title">Referral Earning</span>
        <span className="content">₹ 2,500</span>
      </div>
      <div className="frame">
        <span className="title">Referral Earning</span>
        <span className="content">₹ 2,500</span>
      </div>
      <div className="btn">
        <span className="text">Withdraw Balance</span>
      </div>
    </div>
  );
};

export default Dashboard;

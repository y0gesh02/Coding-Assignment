import React from "react";

import "../styles/totalExpenses.css";

export default function TotalExpenses({ bills }) {
  let totalExpenses = 0;
  for (let i = 0; i < bills.length; i++) {
    totalExpenses += bills[i].amount;
  }
  return (
    <div className="header">
      <div className="head-name">
        <h2>Bill Management</h2>
      </div>
      <div className="expenses">
        <div className="total">Total Expenses: ₹{totalExpenses}</div>
        <div className="monthly">Monthly Budget: ₹10000</div>
      </div>
    </div>
  );
}

import React from "react";
import { AddBill } from "./components/AddBill";
import { Chart } from "./components/Chart";
import { Dashboard } from "./components/Dashboard";
import { Filter } from "./components/Filter";
// import { Filter } from "./components/Filter";

import { BillProvider } from "./contexts/BillContext";

import "./styles/app.css";

function App() {
  return (
    <BillProvider>
      <div className="App">
        <div className="filterss">
          <Filter />
        </div>

        <Dashboard />
        <AddBill />
      </div>
      <div className="App2">
        <Chart />
      </div>
    </BillProvider>
  );
}

export default App;

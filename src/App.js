import "./App.css";
import Homepage from "./pages/homepage/homepage";
import React from "react";
import { Switch, Route } from "react-router-dom";

const HatPage = () => (
  <div>
    <h1> HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatPage} />
      </switch>
    </div>
  );
}

export default App;

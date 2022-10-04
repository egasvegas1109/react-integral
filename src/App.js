import React from "react";
import Menu from "./components/Menu/Menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Graph from "./components/Graph/Graph";
import Integral from "./components/Integral/Integral";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Integral/>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/Graph" element={<Graph />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

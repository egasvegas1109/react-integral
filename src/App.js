import React from "react";
import Menu from "./components/Menu/Menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Graph from "./components/Graph/Graph";
import Description from "./components/Description/Description";
import Integral from "./components/Integral/Integral";
import Quiz from "./components/Quiz/Quiz";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={[<Integral/>]} />
            <Route path="/Description" element={<Description />} />
            <Route path="/Graph" element={<Graph />} />
            <Route path="/Quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

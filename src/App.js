import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useRoutes } from "./routes";

import { Navbar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <d>{useRoutes()}</d>
      <Footer />
    </Router>
  );
}
export default App;

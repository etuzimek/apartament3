import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Apartment from "./components/pages/Apartment";
import Gallery from "./components/pages/Gallery";
import Rules from "./components/pages/Rules";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Apartment} />
        <Route path="/contact" component={Gallery} />
        <Route path="/contact" component={Rules} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

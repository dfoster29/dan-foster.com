import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BioCard from "./components/BioCard";
import ContactCard from "./components/ContactCard";
import PortfolioCard from "./components/PortfolioCard";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={BioCard} />
        <Route exact path="/contact" component={ContactCard} />
        <Route exact path="/portfolio" component={PortfolioCard} />
        <Route
          render={() => <h1 className="text-center">Page Not Found!</h1>}
        />
      </Switch>
    </div>
  </Router>
);

export default App;

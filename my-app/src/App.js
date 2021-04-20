import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../src/modules/common/components/Header/Header";
import Dashboard from "../src/modules/Dashboard/Dashboard";
import Users from "./modules/users/components/Users";
import Albums from "../src/modules/Albums/Albums";
import NotFound from "../src/modules/common/components/NotFound/NotFound";
import { Container } from "@material-ui/core";
import "./App.css";

export default function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/albums" component={Albums} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="*">
            <Redirect to="/notfound" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

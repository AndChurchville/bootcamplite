import React from "react";
import {Grid} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Lessons } from "./components/Lessons.js";
import { Oops } from "./components/Oops.js";
import { LandingPage } from "./components/LandingPage";
import { Header } from "./components";
import GlobalStyles from './globalStyles'

function App() {
  return (
    <>
    <GlobalStyles/>
      <Router>
       
        <Grid>
          <Grid item>
            <Header />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/lessons" component={Lessons} />
              <Route path="/Landing" component={LandingPage} />
              <Route component={Oops} />
            </Switch>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Router>
    </>
  );
}

export default App;

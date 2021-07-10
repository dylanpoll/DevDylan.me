import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./webpages/Home";
import { Projects } from "./webpages/Projects";
import { NoMatch } from "./webpages/NoMatch"; //404 page
import { Layout, Table } from "./components/Layout"; //this keeps everything center
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import {Profile} from "./webpages/Profile";

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Table>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/profile" component={Profile} />
                <Route component={NoMatch} />
              </Switch>
            </Table>
          </Layout>
        </Router>
      </div>
    );
  }
}
export default App;

import React from "react";
import MainPage from "./Component/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Component/WelcomePage";
import Register from "./Component/Register";
import Login from "./Component/Login";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/mainPage" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

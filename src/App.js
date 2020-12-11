import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome.jsx";
import SignIn from "./pages/SignIn/SignIn";
import AdminDashboard from './pages/Admin/AdminDashboard';
import MentorDashboard from './pages/Mentor/MentorDashboard'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/admin/dashboard" component={AdminDashboard}/>
      <Route exact path="/mentor/dashboard" component={MentorDashboard}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;

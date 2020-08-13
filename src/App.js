import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Admin/Dashboard'
import Student from './containers/Admin/Student'
import Course from './containers/Admin/Course/Course'
import Login from './containers/Login/Login'

import NavbarWrap from './components/Navbar/Navbar'

import AdminHome from './containers/Admin/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isAuthenticated = useSelector(state => state.authState.isAuthenticated)

  return (
    <div className="App">
      {/* {
        isAuthenticated ? <AdminHome /> : <Login />
      } */}

      <NavbarWrap isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route path="/course" component={Course} />
        <Route path="/student" component={Student} />
      </Switch>
    </div>
  );
}

export default App;

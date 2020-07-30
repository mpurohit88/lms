import React, { useState } from 'react';

import { } from 'react-router-dom'; // react-router-native

import NavbarWrap from '../../components/Navbar/Navbar'
import Dashboard from './Dashboard'
import Student from './Student'
import Course from './Course/Course'
import { Switch, Route } from 'react-router-dom';

const Home = ({ setIsAuthenticated }) => {
  // const [currentPage, setCurrentPage] = useState(1);

  // const getPage = () => {
  //   switch (currentPage) {
  //     case 1:
  //       return <Dashboard />;
  //     case 2:
  //       return <Course />;
  //     case 3:
  //       return <Student />;
  //     default:
  //       return <Dashboard />;
  //   }
  // }

  return <>
    <NavbarWrap setIsAuthenticated={setIsAuthenticated} />
    {
      // getPage()
      // props.children
    }

    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/course" component={Course} />
      <Route path="/student" component={Student} />
    </Switch>
  </>
}

export default Home;
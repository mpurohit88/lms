import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  return <div>
    {
      !isAuthenticated && <Redirect to="/login" />
    }
    Dashboard
  </div>
}

export default Dashboard;
import React from 'react';

const Home = ({ setIsAuthenticated }) => {
  return <div>Admin Home Page <a onClick={() => { setIsAuthenticated(false) }}>Logout</a></div>
}

export default Home;
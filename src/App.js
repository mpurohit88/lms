import React, { useState } from 'react';

import Login from './containers/Login/Login'
import AdminHome from './containers/Admin/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="App">
      {
        isAuthenticated ? <AdminHome setIsAuthenticated={setIsAuthenticated} /> : <Login setIsAuthenticated={setIsAuthenticated} />
      }
    </div>
  );
}

export default App;

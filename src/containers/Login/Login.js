import React from 'react';
import { Input, H1, PrimaryButton, SecondayButton } from '../../components';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div className="login">
      <H1 text="Please Login" />
      <Input text="User Name" autoFocus={true} />
      <Input text="Password" />
      <PrimaryButton text="Login" onClick={() => { setIsAuthenticated(true) }} />
      <SecondayButton text="Reset" />
    </div>
  )
}

export default Login
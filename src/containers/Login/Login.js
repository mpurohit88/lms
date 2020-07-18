import React from 'react';
import { Input, H1, PrimaryButton, SecondayButton } from '../../components';

import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <H1 text="Please Login" />
      <Input text="User Name" />
      <Input text="Password" />
      <PrimaryButton text="Login" />
      <SecondayButton text="Reset" />
    </div>
  )
}

export default Login
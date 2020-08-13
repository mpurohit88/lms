import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Input, H1, PrimaryButton, SecondayButton, Loader } from '../../components';

import { auth } from '../../store/actions/auth';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.authState.loading);
  const isAuthenticated = useSelector(state => state.authState.loading);

  return (
    <div className="login">

      {isAuthenticated && <Redirect to="/course" />}

      {loading && <Loader />}

      <H1 text="Please Login" />
      <Input text="User Name" value={userName} autoFocus={true} onChange={(e) => setUserName(e.target.value)} />
      <Input text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* <PrimaryButton text="Login" onClick={() => { setIsAuthenticated(true) }} /> */}
      {
        isSignUp ?
          <PrimaryButton text="Sign Up" onClick={() => { dispatch(auth({ email: userName, password: password }, true)) }} />
          :
          <PrimaryButton text="Login" onClick={() => { dispatch(auth({ email: userName, password: password }, false)) }} />
      }

      <SecondayButton text="Reset" />
      <br /><br />
      <PrimaryButton text="Switch Button" onClick={() => { setIsSignUp(!isSignUp) }} />

    </div>
  )
}

export default Login
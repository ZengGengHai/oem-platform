import React, { useState } from 'react';

import { TextField, InputAdornment, MuiThemeProvider, createMuiTheme, IconButton } from '@material-ui/core';
import { login } from '../../request';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setUsername(e.target.value);
    setError('');
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setPassword(e.target.value);
    setError('');
  }

  async function handleCheckAuthClick() {
    await authAccount();
  }

  async function authAccount() {

    console.log(username,password,'登陆')
    const result  = await login({email:username,password:password})
    console.log(result);
  }

  return (
    <div>
      <TextField
        variant="standard"
        value={username}
        onChange={handleUsernameChange}
        error={!!error}
        placeholder={'账号'}
      />
      <TextField
        variant="standard"
        value={password}
        helperText={error}
        onChange={handlePasswordChange}
        error={!!error}
        placeholder={'密码'}
        type={'password'}
      />
      <div onClick={handleCheckAuthClick}
      >
        登录
      </div>
    </div>
  )
}

export default Login;
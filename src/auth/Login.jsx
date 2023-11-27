import React from 'react'
import { loginEndpoint } from '../spotify'
import './login.css'

const Login = () => {
  return (
    <div className='login-page'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="logo" className='logo' />
        <a href={loginEndpoint}><div className="login-btn">Log in</div></a>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import './login.scss'
import Image from '../../assets/img/Login.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = ( {setUser} ) => {
  const navigate = useNavigate()
  
  const [data, setData] = useState('');

  const handleClick = () => {
    setUser(data);
    navigate('/');
  };
  
  return (
    <div className='container'>
        <div className='login'>
          <div className='login__left'>
            <h1 className='login__title'>Sign In To eatly</h1>
            <input
        type="text"
        name="username"
        id="username"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="login__email"
        placeholder="UserName"
      />
      <button onClick={handleClick} className="login__btn">Login</button>
          </div>
          <div className='login__right'>
            <img src={Image} alt="image" />
          </div>
        </div>
    </div>
  )
}

export default Login
//import React  from 'react';
import './styles.module.scss';
import axios from 'axios';
import React, { useState } from 'react';

export default function Base(props) {  
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLognChange=()=> {
    setLogin(login);    
  }
  const handlePwdChange=()=> {    
    setPwd(pwd);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('/login/login',{data:login}).then((res)=>{
      console.log(res)
    })
  }
  
  return (
      <div>
        <form onSubmit={handleSubmit} method="post">
          <input type="text" placeholder="login" value={login} onChange={handleLognChange}/>
          <input type="text" placeholder="password"  value={pwd} onChange={handlePwdChange}/>
          <button>Login</button>
        </form>        
      </div>
  );
}

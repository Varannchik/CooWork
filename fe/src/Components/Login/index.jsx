import React, { useState } from 'react';
import './styles.module.scss';
import axios from 'axios';

export default function Base(props) {  
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLognChange=(e)=> {
    e.preventDefault()
    setLogin(e.target.value);    
  }
  const handlePwdChange=(e)=> {
    e.preventDefault()    
    setPwd(e.target.value);
  }
  
  const handleSubmit=(e)=>{  
    e.preventDefault();
    console.log(login);
    console.log(pwd);
    axios
    .post('http://localhost:3000/login/login',{
      login:login, 
      pwd:pwd
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })    
  }
  
  return (
      <div>
        <form onSubmit={handleSubmit} method="post">
          <input type="text" placeholder="login" value={login} onChange={handleLognChange}/>
          <input type="password" placeholder="password"  value={pwd} onChange={handlePwdChange}/>
          <button>Login</button>
        </form>        
      </div>
  );
}

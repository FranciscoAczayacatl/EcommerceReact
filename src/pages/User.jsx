import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const firsname=localStorage.getItem('userfirsname');
  const lastname=localStorage.getItem('userlastname');
  const email=localStorage.getItem('email');
  const phone=localStorage.getItem('phone');
  const logOut=()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' ,width:'100vw' }}>
          <div style={{margin:'3vh'}}>
            <i class="fa-regular fa-user fa-10x"></i>
          </div>
          <h1>WELCOME {firsname} {lastname}</h1>
          <h3>Email: {email}</h3>
          <p>Phone: {phone}</p>
          <button onClick={()=>logOut()}>log out</button>
      </div>
      
    </div>
  );
};

export default User;
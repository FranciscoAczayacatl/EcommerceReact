import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const { register, handleSubmit} = useForm();
  const isloging=localStorage.getItem('isloging');
  const navigate = useNavigate()
  const submit=data=>{
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
    .then(res=>{
      navigate('/') 
      console.log(res);
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('userfirsname', res.data.data.user.firstName);
      localStorage.setItem('userlastname', res.data.data.user.lastName);
      localStorage.setItem('email', res.data.data.user.email);
      localStorage.setItem('phone', res.data.data.user.phone);
      localStorage.setItem('isloging', true);

    })
    .catch(error=>{
      if(error.response?.status===404){
          alert('credenciales incorrectas')
      }else{
        console.log(error.response?.data);
      }
    })
  }
  const login=()=>{
    return(
     <div>
       <div style={{textAlign:'center', margin:`${5}vh ${0}vh`}}><h1>Login:</h1></div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <Card style={{width:'50vw',backgroundColor:'coral',color:'white'}}>
            <Card.Body>
              <h2>Test:</h2>
              <h3>Email: emailTest@hotmail.com</h3>
              <h4>Password: 1234567890</h4>
            </Card.Body>
          </Card>
        </div>
        
          
        <Form onSubmit={handleSubmit(submit)} style={{ maxWidth: 500, margin: "0 auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("email")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password")}  />
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={'/signup'}><p>you don't have an account <b>create an account</b></p></Link>
      </Form>
     </div>
    );
  }
  return (
    <div>
      {
        isloging ? navigate('/user') :login()
      }
      
    </div>
  );
};

export default Login;
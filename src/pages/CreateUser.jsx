import React from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  const { register, handleSubmit} = useForm();

  const navigate = useNavigate();

  const submit=data=>{
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users', data)
    .then(res=>{
      navigate('/login')
      console.log(res);
    })
    .catch(error=>{
      if(error.response?.status===404){
          alert('credenciales incorrectas')
      }else{
        console.log(error.response?.data);
      }
    })
  }
  return (
    <div>
       <Form onSubmit={handleSubmit(submit)} style={{ maxWidth: 500, margin: "0 auto" }}>
           <h1>Signup</h1>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="example jhon" {...register("firstName")}/>
                <label for="floatingInput" >firsname</label>
              </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="example jhon" {...register("lastName")}/>
                <label for="floatingInput" >lastName</label>
              </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")}/>
              <label for="floatingInput" >Email address</label>
           </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" {...register("password")}/>
              <label for="floatingPassword">Password</label>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <div class="form-floating mb-3">
                <input type="tel" class="form-control" id="floatingInput" placeholder="example jhon" {...register("phone")}/>
                <label for="floatingInput" >phone</label>
              </div>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
       
    </div>
  );
};

export default CreateUser;
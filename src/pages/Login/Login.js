import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../../services/userService";
import './Login.css';

export default function Login() {
  const userService = new UserService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
  Params Required:
  - email (string)
  - password (string)
  
  Returns: ** RETURNS AUTH TOKEN**
  - Successful: Will return a map -> {status: true, user: user object, token: string}
  - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
  */
  async function signInUser() {
    const user = await userService.createUser(email, password);
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login"> 
      <h1 style={{textAlign:"center"}}>Acucheck</h1> 
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" 
            onclick={() => userService.signInUser()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
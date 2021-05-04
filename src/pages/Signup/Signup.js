import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../../services/userService";
import './Signup.css';


export default function Login() {
    const userService = new UserService();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0 && username.length > 0 && title.length > 0; 
    }

    /*
    Params Required:
    - name (string)
    - email (string)
    - password (string)
    - title (string)
    
    Returns: ** RETURNS AUTH TOKEN**
    - Successful: Will return a map -> {status: true, msg: 'success message', token: string}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
    async function makeUser() {
      const user = await userService.createUser(username, email, password, title);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
      }

      return (
        <div className="Signup">
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
            <Form.Group size="lg" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" 
            onClick={() => makeUser()}>
              Sign up
            </Button>
          </Form>
        </div>
      );
}
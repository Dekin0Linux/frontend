import React from 'react';
import Form from 'react-bootstrap/Form';
import authStore from '../../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';
import './loginForm.scss';

const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate('/');
  };
  return (
    <div className="formContainer">
      <Form className="form" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            onChange={store.updateLoginForm}
            type="email"
            name="email"
            value={store.loginForm.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={store.updateLoginForm}
            type="password"
            name="password"
            value={store.loginForm.password}
            placeholder="Password"
          />
        </Form.Group>

        <button className="formButtons" type="submit">
          Log in
        </button>
      </Form>
      <div className="signupOption">
        <h6>Don't have an account</h6>
        <Link to="/signup">
          <button className="formButtons">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

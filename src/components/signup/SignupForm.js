import './signupForm.scss';
import React from 'react';
import Form from 'react-bootstrap/Form';
import authStore from '../../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate('/login');
  };

  return (
    <div>
      <h1 className="font2">Sign up</h1>
      <Form onSubmit={handleSignup}>
        <Container>
          <Row>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateSignupForm}
                  type="email"
                  name="email"
                  value={store.signupForm.email}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="password"
                  name="password"
                  value={store.signupForm.password}
                />
              </Form.Group>
              {/* <Form.Group className="mb-1 " controlId="formBasicPassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="password"
                  name="reenterPassword"
                  value={reenterPassword}
                />
              </Form.Group>
              <Form.Text>{passwordMessage}</Form.Text>*/}
            </Col>

            <button className="formButtons" type="submit">
              Sign Up
            </button>
          </Row>
        </Container>
      </Form>
      <div
        className="formButtonsContainer"
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h6>Already have an account</h6>{' '}
        <Link to="/login">
          <button className="formButtons" type="button">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoginForm = ({ switchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!email || !password) {
      return alert('Please enter login credentials');
    }

    // TODO: Call Login API
    console.log({ email, password });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-info text-center'>Login</h2>
          <hr />
          <Form autoComplete='off' onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={changeHandler}
                placeholder='Enter Email'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={changeHandler}
                placeholder='Enter Password'
              />
            </Form.Group>

            <Button variant='info' type='submit' block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className='py-2'>
          <a href='#!' onClick={() => switchForm('reset-password')}>
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default LoginForm;

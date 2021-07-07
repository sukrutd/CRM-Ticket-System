import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ResetPassword = ({ switchForm }) => {
  const [email, setEmail] = useState('');

  const changeHandler = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!email) {
      return alert('Please enter your email.');
    }

    console.log({ email });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
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

            <Button type='submit' block>
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className='py-2'>
          <a href='#!' onClick={() => switchForm('login')}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  switchForm: PropTypes.func.isRequired
};

export default ResetPassword;

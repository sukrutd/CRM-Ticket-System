import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UpdateTicket = ({ message, changeHandler, submitHandler }) => {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Label className='font-weight-bold'>Reply</Form.Label>
      <Form.Control as='textarea' rows='5' name='details' value={message} onChange={changeHandler} />
      <Row>
        <Col className='text-center my-2'>
          <Button variant='info' type='submit'>
            Reply
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

UpdateTicket.propTypes = {
  message: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default UpdateTicket;

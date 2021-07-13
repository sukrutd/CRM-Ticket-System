import React from 'react';
import { Jumbotron, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

const AddTicketForm = ({ formData = {}, changeHandler, submitHandler }) => {
  const { subject = '', issueDate = '', details = '' } = formData;

  return (
    <Jumbotron className='add-ticket-form bg-light'>
      <h2 className='text-center mb-5'>Add New Ticket</h2>
      <Form autoComplete='off' onSubmit={submitHandler}>
        <Form.Group as={Row}>
          <Form.Label column md={4} lg={3}>
            Subject
          </Form.Label>
          <Col md={8} lg={9}>
            <Form.Control
              type='text'
              name='subject'
              value={subject}
              onChange={changeHandler}
              placeholder='Enter subject'
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={4} lg={3}>
            Reported on
          </Form.Label>
          <Col md={8} lg={9}>
            <Form.Control type='date' name='issueDate' value={issueDate} onChange={changeHandler} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={4} lg={3}>
            Details
          </Form.Label>
          <Col md={8} lg={9}>
            <Form.Control as='textarea' rows='5' name='details' value={details} onChange={changeHandler} required />
          </Col>
        </Form.Group>

        <div className='text-center'>
          <Button type='submit' variant='info'>
            Submit
          </Button>
        </div>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  formData: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default AddTicketForm;

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from 'components/Breadcrumb';
import MessageHistory from 'components/MessageHistory';
import UpdateTicket from 'components/UpdateTicket';
import tickets from 'assets/data/tickets.json';

const ticket = tickets[0];

const Ticket = () => {
  const [message, setMessage] = useState('');

  const submitHandler = () => {};

  return (
    <Container>
      <Breadcrumb page='Ticket' />

      <Row>
        <Col className='text-right mb-2'>
          <Button variant='outline-primary'>Close Ticket</Button>
        </Col>
      </Row>

      <Row className='my-2'>
        <Col sm={4} md={3} className='font-weight-bold'>
          Subject:
        </Col>
        <Col sm={8} md={9}>
          {ticket.subject}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col sm={4} md={3} className='font-weight-bold'>
          Reported on:
        </Col>
        <Col sm={8} md={9}>
          {ticket.addedAt}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col sm={4} md={3} className='font-weight-bold'>
          Status:
        </Col>
        <Col sm={8} md={9}>
          {ticket.status}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col>
          <MessageHistory messageHistory={ticket.history} />
        </Col>
      </Row>

      <Row className='my-2'>
        <Col>
          <UpdateTicket
            message={message}
            changeHandler={(event) => setMessage(event.target.value)}
            submitHandler={submitHandler}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;

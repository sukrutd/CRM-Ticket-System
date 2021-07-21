import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import MessageHistory from 'components/MessageHistory';
import UpdateTicket from 'components/UpdateTicket';
import tickets from 'assets/data/tickets.json';

const Ticket = () => {
  const { tid: ticketId } = useParams();
  const [ticket, setTicket] = useState({});
  const { subject = '', status = '', addedAt = '', history: messageHistory = [] } = ticket;

  const [message, setMessage] = useState('');

  useEffect(() => {
    setTicket(tickets.find((item) => item.id === ticketId) || {});
  }, [ticketId]);

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
          {subject}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col sm={4} md={3} className='font-weight-bold'>
          Reported on:
        </Col>
        <Col sm={8} md={9}>
          {addedAt}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col sm={4} md={3} className='font-weight-bold'>
          Status:
        </Col>
        <Col sm={8} md={9}>
          {status}
        </Col>
      </Row>

      <Row className='my-2'>
        <Col>
          <MessageHistory messageHistory={messageHistory} />
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

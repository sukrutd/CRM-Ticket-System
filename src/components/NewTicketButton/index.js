import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';

const NewTicketButton = ({ variant = 'info', type = 'button', ...buttonProperties }) => {
  return (
    <Row>
      <Col className='my-2'>
        <Button variant={variant} type={type} {...buttonProperties}>
          <span className='d-flex align-items-center'>
            <PlusCircleFill className='mr-2' size={20} />
            New Ticket
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default NewTicketButton;

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddTicketForm from 'components/AddTicketForm';
import Breadcrumb from 'components/Breadcrumb';

const initialFormData = {
  subject: '',
  issueDate: '',
  details: ''
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Breadcrumb page='New Ticket' />

      <Row>
        <Col className='my-2'>
          <AddTicketForm formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;

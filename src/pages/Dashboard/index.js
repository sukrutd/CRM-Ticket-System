import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import TicketTable from '../../components/TicketTable';
import PageBreadcrumb from '../../components/Breadcrumb';
import tickets from '../../assets/data/tickets.json';
import './styles.scss';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-3'>
          <PageBreadcrumb page='Dashboard' />
        </Col>
      </Row>

      <Row>
        <Col className='text-center my-3'>
          <Button variant='info'>
            <span className='d-flex align-items-center'>
              <PlusCircleFill className='mr-2' size={20} />
              New Ticket
            </span>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className='text-center my-3'>
          <div className='mb-1'>Total Tickets: 50</div>
          <div className='mb-1'>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className='my-3'>
          <div className='border-bottom border-primary py-3'>Recently Added Tickets</div>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

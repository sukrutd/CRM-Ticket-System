import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewTicketButton from 'components/NewTicketButton';
import PageBreadcrumb from 'components/Breadcrumb';
import TicketTable from 'components/TicketTable';
import tickets from 'assets/data/tickets.json';
import './styles.scss';

const Dashboard = () => {
  return (
    <Container>
      <PageBreadcrumb page='Dashboard' />
      <NewTicketButton />
      <Row>
        <Col className='text-center my-2'>
          <div className='mb-1'>Total Tickets: 50</div>
          <div className='mb-1'>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className='my-2'>
          <div className='border-bottom border-primary py-2'>Recently Added Tickets</div>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

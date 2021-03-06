import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb';
import NewTicketButton from 'components/NewTicketButton';
import TicketTable from 'components/TicketTable';
import SearchForm from 'components/SearchForm';
import tickets from 'assets/data/tickets.json';

const TicketList = () => {
  const [searchString, setSearchString] = useState('');
  const [displayedTickets, setDisplayedTickets] = useState(tickets);

  useEffect(() => {
    if (searchString) {
      setDisplayedTickets(
        tickets.filter(({ subject = '' }) => subject.toLowerCase().includes(searchString.toLowerCase()))
      );
    } else {
      setDisplayedTickets(tickets);
    }
  }, [searchString]);

  const changeHandler = (event) => setSearchString(event.target.value);

  return (
    <Container>
      <Breadcrumb page='Ticket List' />

      <Row>
        <Col sm={6}>
          <Link to='/add-ticket'>
            <NewTicketButton />
          </Link>
        </Col>
        <Col sm={6} className='text-right'>
          <SearchForm searchString={searchString} changeHandler={changeHandler} />
        </Col>
      </Row>

      <Row>
        <Col>
          <TicketTable tickets={displayedTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;

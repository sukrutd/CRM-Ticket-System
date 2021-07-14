import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-2'>
            <div className='d-flex flex-column flex-sm-row justify-content-center'>
              <div className='mx-1'>Copyright &copy; CRM System {new Date().getFullYear()}.</div>
              <div className='mx-1'>All Rights Reserved.</div>
            </div>
            <div className='text-muted'>
              <span>Credits: Logo made by </span>
              <a href='https://www.freepik.com' title='Freepik'>
                Freepik
              </a>
              <span> from </span>
              <a href='https://www.flaticon.com/' title='Flaticon'>
                www.flaticon.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

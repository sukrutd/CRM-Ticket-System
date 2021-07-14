import React from 'react';
import { Breadcrumb, Row, Col } from 'react-bootstrap';

const PageBreadcrumb = ({ page }) => {
  return (
    <Row>
      <Col className='my-2'>
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>{page}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default PageBreadcrumb;

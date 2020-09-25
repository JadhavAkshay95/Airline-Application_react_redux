import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var style = {
  backgroundColor: '#e6fff8',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%'
};

const Footer = () => {
  return (
    <div style={style}>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

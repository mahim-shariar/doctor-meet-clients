import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ChooseDiagnostic.css';
const ChooseDiagnostic = ({section}) => {
    return (
        <Col lg={4} md={6} sm={12}>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={section.img} />
  <Card.Body>
    <Card.Title>{section.title}</Card.Title>
    <Card.Text>
      {section.content}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </Col>
    );
};

export default ChooseDiagnostic;
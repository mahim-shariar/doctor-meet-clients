import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ChooseDiagnostic.css';
const ChooseDiagnostic = ({section}) => {
  const intPrice=section.price;
  const intDiscount=section.discount;
    const floatDiscount=parseFloat(intDiscount).toFixed(2);
    
    const dd=floatDiscount/100.00;
    // console.log(intPrice,dd);
    const off=(intPrice*dd).toFixed(2);
const floatPrice=intPrice-(intPrice*dd);
  const navigate=useNavigate();
  const goToForm=(e)=>{
e.preventDefault();
navigate(`/diagnostic-appointment-form/sections/${section._id}`)
  }
    return (
        <Col lg={4} md={6} sm={12}>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={section.img} />
  <Card.Body>
    <Card.Title>{section.title}</Card.Title>
    <Card.Text>
      {section.content}
      <br />
      ${floatPrice}(-${off} OFF)
    </Card.Text>
    <Button variant="primary" onClick={goToForm}>Go somewhere</Button>
  </Card.Body>
</Card>

        </Col>
    );
};

export default ChooseDiagnostic;
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAppSelector } from '../../../redux/store';


const DoctorSchedule = ({upComingAppointment}) => {
    const { user } = useAppSelector((state) => state.user);
   
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{}</Card.Subtitle>
    <Card.Text>
      {upComingAppointment?.patientEmail}
      
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    );
};

export default DoctorSchedule;
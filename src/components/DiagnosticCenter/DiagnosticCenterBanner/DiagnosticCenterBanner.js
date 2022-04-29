import { Carousel } from 'bootstrap';
import React from 'react';

const DiagnosticCenterBanner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/magnetic-resonance-imaging-tomography-mri_1150-50293.jpg?size=626&ext=jpg&ga=GA1.2.1630049320.1649838161"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/modern-operating-room-in-a-hospital-generated-digitally-picture-id1281627829?b=1&k=20&m=1281627829&s=170667a&w=0&h=Hm99xf7HqPEujo0zIyyLB1WqUhPLffNGi9IicfLoR1c="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/doctor-with-test-tube-picture-id177440807?k=20&m=177440807&s=612x612&w=0&h=lbE8S8ZCaVyVYtsGkfF0EyLXGMixBpGwswfLQ_pr71s="
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default DiagnosticCenterBanner;
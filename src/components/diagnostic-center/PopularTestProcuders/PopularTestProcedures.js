import React, {  useEffect, useState } from 'react';
import Slider from 'react-slick';
import PopularTestProcedure from '../PopularTestProcedure/PopularTestProcedure';
import './PopularTestProcedures.css';
const PopularTestProcedures = () => {

  const [testProcedures, setTestProcedures] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/testProcuders")
      .then(res => res.json())
      .then(data => setTestProcedures(data))
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container mb-5 popular-test-procedures">
      <div className='diagnosis-header'>
        <h1 className="diagnosis-title">
          Popular Test Procedures
        </h1>
        <h6 className='diagnosis-title-content'>
          We have so many popular test procedures in a reasonable price
        </h6>
        <hr />
      </div>

      <Slider {...settings}>

        {
          testProcedures.map(testProcedure => <PopularTestProcedure testProcedure={testProcedure} key={testProcedure._id}></PopularTestProcedure>)
        }
      </Slider>
    </div>
  );


};

export default PopularTestProcedures;
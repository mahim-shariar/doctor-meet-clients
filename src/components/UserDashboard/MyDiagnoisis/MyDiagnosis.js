import React from 'react';

const MyDiagnosis = ({diagnosis}) => {
    console.log(diagnosis);
    const intPrice=diagnosis.price;
    const intDiscount=diagnosis.discount;
      const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
      const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);
  const floatPrice=intPrice-(intPrice*dd);
    return (
        
        <tr>
        <td>{diagnosis.name}</td>
        <td>{diagnosis.selectedDiagnosis.code}</td>
        <td>{diagnosis?.paymentStatus}</td>
        <td>{floatPrice} $</td>
        <td>{diagnosis?.bookingDate}</td>
        {/* <td>
            <Link to={`/payAppointmentFee/${appointment._id}`}>
            <button className='btn btn-warning'>Pay</button>
            </Link>
          </td> */}
      </tr>
    );
};

export default MyDiagnosis;
import React from 'react';
import { Link } from 'react-router-dom';

const MyDiagnosis = ({diagnosis}) => {
    console.log(diagnosis)
    const intPrice=diagnosis.selectedDiagnosis.price;
    const intDiscount=diagnosis.selectedDiagnosis.discount;
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
        <td>
            <Link to={`/diagnostic-pay/${diagnosis._id}`}>
            <button className='btn btn-warning'>Pay</button>
            </Link>
          </td>
      </tr>
    );
};

export default MyDiagnosis;
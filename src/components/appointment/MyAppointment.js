import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTime from '../../hooks/useTime';

const MyAppointment = ({appointment}) => {
    const {date,time,hour,miniute,fullDate}=useTime();
    const [disabled, setDisabled] = useState(true);
    console.log(appointment.date);

    useEffect(()=>{
        if(appointment.date===date){
            setDisabled(false);
        }
    },[appointment.date,date])


    console.log(time,hour,miniute,fullDate)
    console.log(parseFloat(time));
    return (
        <tr>
      <td>{appointment.doctorInfo.name}</td>
      <td>{appointment.doctorInfo.timeSlot||appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3} pm </td>
      <td>{appointment.status}</td>
      <td>{appointment.doctorInfo.visit}</td>
      <td><button disabled={disabled} className="btn btn-danger">Call</button></td>
      <td>
          <Link to={`/pay-appointment-fee/${appointment._id}`}>
          <button className='btn btn-warning'>Pay</button>
          </Link>
        </td>
    </tr>
    );
};

export default MyAppointment;
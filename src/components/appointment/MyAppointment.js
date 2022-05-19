import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTime from '../../hooks/useTime';
const MyAppointment = ({appointment}) => {
    const {date}=useTime();
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        if(appointment.date===date){
            setDisabled(false);
            
        }    
    },[appointment.date,date])
    
      
    return (
        <tr>
      <td>{appointment.doctorInfo.name}</td>
      <td>{appointment.doctorInfo.timeSlot||appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3} pm </td>
      <td>{appointment.status}</td>
      <td>{appointment.doctorInfo.visit}</td>
      {/* <td><button disabled={disabled} className="btn btn-danger" title={`Available at ${appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3||appointment.doctorInfo.timeSlot}`}>
          <img src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875405.png?token=exp=1652940429~hmac=995b427d3e0a856c05a38736ffa2358f" alt="meet-icon" style={{width:"40px",height:"40px"}}
          disabled={disabled} className="btn btn-danger" title={`Available at ${appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3||appointment.doctorInfo.timeSlot}`}
          />
          </button></td> */}
          {
              !disabled?<td>
              <img src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875405.png?token=exp=1652940429~hmac=995b427d3e0a856c05a38736ffa2358f" alt="meet-icon" style={{width:"40px",height:"40px"}}
              disabled={disabled} title={`Available at ${appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3||appointment.doctorInfo.timeSlot}`}
              /> 
              </td>:<td>
          <img src="https://cdn-icons.flaticon.com/png/512/2875/premium/2875374.png?token=exp=1652940617~hmac=e2f2c95678b482d296eff5b5966359be" alt="meet-icon" style={{width:"40px",height:"40px"}}
          disabled={disabled} title={`Available at ${appointment.doctorInfo.timeSlot1||appointment.doctorInfo.timeSlot2||appointment.doctorInfo.timeSlot3||appointment.doctorInfo.timeSlot}`}
          /> 
          </td>
          }
          
      <td>
          <Link to={`/pay-appointment-fee/${appointment._id}`}>
          <button className='btn btn-warning'>Pay</button>
          </Link>
        </td>
    </tr>
    );
};

export default MyAppointment;
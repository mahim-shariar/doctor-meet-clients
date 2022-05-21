import React from 'react';
import '../../../components/appointment/AppointmentStyle.css';

const AllAppointment= ({appointment}) => {
    const deleteAnAppointment=()=>{
      const confirm=window.confirm("Are you sure want to delete the data?");
      if(confirm){
        fetch(`https://floating-basin-02241.herokuapp.com/allAppointments/${appointment._id}`,{
          method:"Delete",
  
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            alert("Data is Deleted Successfully");
            
          }
        })
      }
      
    }
    return (
      <tr className='text-center' style={{backgroundColor:"#c8d6e5",borderBottom: "2px solid #222f3e"}}>
      <td className="appointment-table-row-data">{appointment?._id}</td>
      <td className="appointment-table-row-data">{appointment?.patientName}</td>
      <td className="appointment-table-row-data">{appointment?.doctorInfo.name}</td>
      <td className="appointment-table-row-data">{appointment.doctorInfo.timeSlot || appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3}</td>
      <td className="appointment-table-row-data">{appointment?.date}</td>
      <td className="appointment-table-row-data">{appointment?.status}</td>
      
      <td className="appointment-table-row-data"><i className="fas fa-info"></i></td>
      <td className="appointment-table-row-data">
        <i className="fas fa-trash" onClick={deleteAnAppointment}></i>
      </td>
    </tr>
    );
};

export default AllAppointment;
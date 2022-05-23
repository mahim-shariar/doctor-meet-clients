// import {useEffect,useState} from 'react';
// import {useAppSelector} from '../redux/store';

// export default function useDoctorSchedule(){
//     const { user } = useAppSelector((state) => state.user);
// const [doctorAppointments,setDoctorAppointments]=useState([]);
//     useEffect(() => {
      
//         fetch("http://localhost:5500/allAppointments")
//         .then(res=>res.json())
//         .then(data=>{
//             for(const d of data){
//                 if(d.doctorInfo.email===user.email){
//                     setDoctorAppointments([...doctorAppointments,d]);
//                 }
//             }
//         })
      
//     }, [user,doctorAppointments])
//     return{
//         doctorAppointments
//     }
    
// }
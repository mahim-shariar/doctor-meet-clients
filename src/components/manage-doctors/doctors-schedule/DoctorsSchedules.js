import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import DoctorSchedule from './DoctorSchedule';

const DoctorsSchedules = () => {
    const [upComingAppointments, setUpComingAppointments] = useState([]);
    // const [appointementInfo,setAppointmentInfo]=useState({});
    const { user } = useAppSelector((state) => state.user);

    useEffect(() => {
        
            fetch("https://floating-basin-02241.herokuapp.com/allAppointments")
                .then(res => res.json())
                .then(data => {


                   setUpComingAppointments(data);

                })

        
    }, [ upComingAppointments,user])
    return (
        <div>
            <DoctorSchedule></DoctorSchedule>
            {
                upComingAppointments.map(upComingAppointment=><DoctorSchedule upComingAppointment={upComingAppointment} key={upComingAppointment._id}></DoctorSchedule>)
            }
        </div>
    );
};

export default DoctorsSchedules;
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../firebase/useFirebase/useFirebase";
import MyAppointment from "./MyAppointment";
import Page from "../Page";
import { useAppSelector } from "../../redux/store";


const MyAppointments = () => {
    // const { user } = useFirebase();
    const { user } = useAppSelector((state) => state.user);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        

        fetch(
            `https://floating-basin-02241.herokuapp.com/allAppointments/single?patientEmail=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setAppointments(data));
           
    }, [user,appointments]);

    return (
        <Page title="All Appointments">
{/* <AppointmentNotifications></AppointmentNotifications> */}
        <div>
           
            
            <Table className="appointment-table w-100" >
                <thead>
                    <tr style={{backgroundColor:"#c8d6e5"}} className="appointment-table-header-container">
                        
                        <th className="appointment-table-header">Doctor's Name</th>
                        <th className="appointment-table-header">Time Slot</th>
                        <th className="appointment-table-header">Date</th>
                        <th className="appointment-table-header">Payment Status</th>
                        <th className="appointment-table-header">Payment Fee</th>
                        <th className="appointment-table-header">Call</th>
                        <th className="appointment-table-header"></th>
                    </tr>
                </thead>
                <tbody className="appointment-table-body">
                    {appointments?.map((appointment,index) => (
                        <MyAppointment
                        key={index}
                            appointment={appointment}
                        ></MyAppointment>
                    ))}
                </tbody>
            </Table>
        </div>
        </Page>
    );
};

export default MyAppointments;

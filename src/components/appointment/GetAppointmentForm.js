import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../../firebase/useFirebase/useFirebase';
import './GetAppointmentForm.css';
const GetAppointmentForm = () => {
    const {user}=useFirebase();
    const params = useParams();
    const navigate=useNavigate();
    const [selectedDoctor, setSelectedDoctor] = useState({});
    const [data,setData]=useState({});
    useEffect(() => {
        //Here a specific doctor has to be fetched using params.id
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => {
                for (const d of data) {
                    if (d.id === Number(params.id)) {
                        setSelectedDoctor(d);
                    }
                }
            })
    }, [params])

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...data };
        newUser[field] = value;
        setData(newUser);
    }
    const submitTheFormOfPatientsInfo = (e) => {
        e.preventDefault();
        const patientInfo={patientName:user?.displayName,patientEmail:user?.email,...data,doctorInfo:selectedDoctor,status:"unpaid"};
        // "patientInfo" will be post in http://localhost:5000/allAppointments
        console.log(patientInfo);
        fetch(`https://floating-basin-02241.herokuapp.com/allAppointments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(patientInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("Appointment is booked successfully");
                        navigate("/");
                    }
                })
        
        // naviagte(`/payAppointmentFee/${selectedDoctor?.id}`)
    }
    return (
        <div className="form-container">
            <h1 className='appointment-title text-center'>Enter Your Information Here</h1>
            <form action="" className="getAppointmentForm" onSubmit={submitTheFormOfPatientsInfo} >

                <Form.Control type="text" disabled placeholder={user?.displayName}/>
                <Form.Control type="text" disabled placeholder={selectedDoctor.name}/>
                <Form.Control type="text" disabled placeholder={selectedDoctor.specialist}/>
                <Form.Control type="text" placeholder="Age" name="age" onChange={handleOnChange} required/>
                <Form.Select name="gender" onChange={handleOnChange} required>
                    <option>Select Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </Form.Select>
                <Form.Control type="date" placeholder="Date" name="date" onChange={handleOnChange} required/>
                <Form.Select aria-label="Default select example" name="bloodGroup" onChange={handleOnChange}>
                    <option>Select Your Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>

                </Form.Select>
                <Form.Select aria-label="Default select example" name="timeSlot" onChange={handleOnChange}>
                    <option>Select a Timeslot</option>
                    <option value={selectedDoctor.timeSlot1}>{selectedDoctor.timeSlot1}</option>
                    <option value={selectedDoctor.timeSlot2}>{selectedDoctor.timeSlot2}</option>
                    <option value={selectedDoctor.timeSlot3}>{selectedDoctor.timeSlot3}</option>
                    

                </Form.Select>
                <Form.Control type="number" placeholder="High BP"  name="highBP" onChange={handleOnChange} />
                <Form.Control type="number" placeholder="Low BP"  name="lowBP" onChange={handleOnChange}/>
                <Form.Control type="number" placeholder="Weight"  name="weight" onChange={handleOnChange}/>
                <Form.Control type="number" placeholder="Height"  name="height" onChange={handleOnChange}/>
                <Form.Label>Present Health Condition : </Form.Label>
                <Form.Control as="textarea" rows={3}  name="healthIssues" onChange={handleOnChange}/>
                <Form.Label>Previous Health Story : </Form.Label>
                <Form.Control as="textarea" rows={3}  name="pastHealthIssues" onChange={handleOnChange}/>
                <button type="submit" className="btn-appointmen-submit">Submit</button>
            </form>
        </div>
    );
};

export default GetAppointmentForm;
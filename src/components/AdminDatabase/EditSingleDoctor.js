import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditSingleDoctor = () => {
    const params=useParams();
    const [doctor,setDoctor]=useState({});
    const [_id,set_id]=useState("");
    const [id,setId]=useState('');
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [img,setImg]=useState("");
    const [specialist,setSpecialist]=useState("");
    const [timeSlot1,setTimeSlot1]=useState("");
    const [timeSlot2,setTimeSlot2]=useState("");
    const [timeSlot3,setTimeSlot3]=useState("");
    const [availableDays,setAvailableDays]=useState("");
    const [visit,setVisit]=useState("");
    const [phone,setPhone]=useState("");
    const [website,setWebsite]=useState("");
    // const [username,setUsername]=useState(doctor.username);

    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/doctors")
        .then(res=>res.json())
        .then(data=>{
            for(const d of data){
                if(d._id===params.id){
                    console.log("Hello");
                    setDoctor(d);
                    set_id(d._id);
                    setId(d.id);
                    setName(d.name);
                    setUsername(d.username);
                    setEmail(d.email);
                    setImg(d.img);
                    setSpecialist(d.specialist);
                    setTimeSlot1(d.timeSlot1);
                    setTimeSlot2(d.timeSlot2);
                    setTimeSlot3(d.timeSlot3);
                    setAvailableDays(d.availableDays);
                    setVisit(d.visit);
                    setPhone(d.phone);
                    setWebsite(d.website);
                }
            }
           
        })
    },[params.id])

    const changeDoctorInfo=(e)=>{
        e.preventDefault();
        console.log(name);
        const newDoctor={id,name,username,email,img,specialist,timeSlot1,timeSlot2,timeSlot3,availableDays,visit,phone,website};
        console.log(newDoctor);
        setDoctor(newDoctor);
        fetch(
            `https://floating-basin-02241.herokuapp.com/doctors/${params.id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newDoctor),
            }
        )
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div>
            
        <form onSubmit={changeDoctorInfo}>
            <input type="text" onChange={(e)=>set_id(e.target.value)} value={_id} disabled/>
            <input type="text" onChange={(e)=>setId(e.target.value)} value={id} />
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input type="text" onChange={(e)=>setImg(e.target.value)} value={img} />
            <input type="text" onChange={(e)=>setSpecialist(e.target.value)} value={specialist} />
            <input type="text" onChange={(e)=>setTimeSlot1(e.target.value)} value={timeSlot1} />
            <input type="text" onChange={(e)=>setTimeSlot2(e.target.value)} value={timeSlot2} />
            <input type="text" onChange={(e)=>setTimeSlot3(e.target.value)} value={timeSlot3} />
            <input type="text" onChange={(e)=>setAvailableDays(e.target.value)} value={availableDays} />
            <input type="text" onChange={(e)=>setVisit(e.target.value)} value={visit} />
            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} />
            <input type="text" onChange={(e)=>setWebsite(e.target.value)} value={website} />
            <input type="submit"/>
        </form>

        </div>
    );
};

export default EditSingleDoctor;
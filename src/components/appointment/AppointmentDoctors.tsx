import React, { useEffect, useState } from "react";
import "./AppointmentStyle.css";
import { Grid } from "@mui/material";
import AppointmentDoctor from "./AppointmentDoctor";
const AppointmentDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <h1
        className="appointment-title text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        Book an Appointment
      </h1>

      <Grid container spacing={1}>
        {doctors.map((doctor: any, _id) => (
          <AppointmentDoctor key={_id} doctor={doctor} />
        ))}
      </Grid>
    </div>
  );
};

export default AppointmentDoctors;

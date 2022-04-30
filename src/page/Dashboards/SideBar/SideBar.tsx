import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import logo from "../../../Assets/img/logo.png";

const SideBar = () => {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/dashboard/")[1];
  return (
    <div className="sidebar">
      <div>
        <img className="img-fluid" src={logo} alt="" />
      </div>
      <div className="nav-content">
        <Link
          to="/dashboard/dashboarHome"
          className={firstPath === "dashboarHome" ? "active" : ""}
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/doctors"
          className={firstPath === "doctors" ? "active" : ""}
        >
          Doctors
        </Link>
        <Link
          to="/dashboard/favdoc"
          className={firstPath === "favdoc" ? "active" : ""}
        >
          Favorite Doctors
        </Link>
        <Link
          to="/dashboard/admin"
          className={firstPath === "admin" ? "active" : ""}
        >
          Admin
        </Link>
        <Link
          to="/dashboard/myappointments"
          className={firstPath === "myappointments" ? "active" : ""}
        >
          My Appointments
        </Link>
        <Link
          to="/dashboard/allAppointments"
          className={firstPath === "allAppointments" ? "active" : ""}
        >
          All Appointments
        </Link>
        <Link
          to="/dashboard/my-diagnosis"
          className={firstPath === "my-diagnosis" ? "active" : ""}
        >
          My Diagnosis
        </Link>
        <Link
          to="/dashboard/all-diagnosis"
          className={firstPath === "all-diagnosis" ? "active" : ""}
        >
          All Diagnosis
        </Link>
        
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default SideBar;

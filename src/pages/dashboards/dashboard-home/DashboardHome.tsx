import React from "react";
import "./DashboardHome.css";
import LastAppointments from "./last-appointments/LastAppointments";
import PatientAgeDemoGraphic from "./patient-demographic/PatientAgeDemoGraphic";
import PatientGenderDemoGraphic from "./patient-demographic/PatientGenderDemoGraphic";
import Survey from "./survey/Survey";
import Page from "../../../components/Page";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const DashboardHome = () => {
  return (
    <Page title="Dashboard Home">
      <RootStyle>
        <div className="DashboardHome">
          <div className="row mx-auto ps-2">
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas commonIconStyle fa-briefcase-medical"></i>
                <div>
                  <h5>Appointment</h5>
                  <h5 className="text-primary">256</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas  commonIconStyle fa-bed"></i>
                <div>
                  <h5>New Patients</h5>
                  <h5 className="text-primary">250</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas  commonIconStyle fa-bed"></i>
                <div>
                  <h5>Operations</h5>
                  <h5 className="text-primary">25</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas commonIconStyle  fa-dollar-sign"></i>
                <div>
                  <h5>Earnings</h5>
                  <h5 className="text-primary">$5238</h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* chart section */}
            <Survey></Survey>
          </div>

          <div className="px-4">
            {/* Last Appoinments Section */}
            <LastAppointments></LastAppointments>
          </div>

          <div className="row">
            {/* Patient Demographic */}
            <div className="col-lg-6">
              <PatientAgeDemoGraphic></PatientAgeDemoGraphic>
            </div>
            <div className="col-lg-6">
              <PatientGenderDemoGraphic></PatientGenderDemoGraphic>
            </div>
          </div>
        </div>
      </RootStyle>
    </Page>
  );
};

export default DashboardHome;

import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import blood from "../../assets/services/blood.jpg";
import consultation from "../../assets/services/consultation.png";
import covid from "../../assets/services/covid.jpg";
import emergency from "../../assets/services/emergency.png";
import info from "../../assets/services/info.png";
import medicine from "../../assets/services/medicine.png";
import reports from "../../assets/services/reports.png";
import search from "../../assets/services/search.png";
import Service from "./Service";
import "./Services.css";
//
interface service_if {
  id: number;
  img: string;
  name: string;
  description: string;
  route: string;
}

const services: service_if[] = [
  {
    id: 1,
    img: search,
    name: "Search Doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    route: "",
  },
  {
    id: 2,
    img: consultation,
    name: "Free Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations.",
    route: "",
  },
  {
    id: 3,
    img: reports,
    name: "Reports Feedback",
    description: "Get reports feedback from doctors with prescribed medicine.",
    route: "",
  },
  {
    id: 4,
    img: covid,
    name: "COVID-19 Update",
    description:
      "Get update about covid information everyday. Consult Covid Specialist from available doctors.",
    route: "/CovidPortal",
  },
  {
    id: 5,
    img: blood,
    name: "Find Blood Donors",
    description:
      "No need to worry for your patients. We will manage blood donors for you.",
    route: "/FindDonors",
  },
  {
    id: 6,
    img: medicine,
    name: "Online Pharmacy",
    description:
      "Buy  your medicines with our mobile application with a simple delivery system",
    route: "",
  },
  {
    id: 7,
    img: info,
    name: "Tracking",
    description: "Track and save your medical history and health data ",
    route: "",
  },
  {
    id: 8,
    img: emergency,
    name: "Emergency Care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family.",
    route: "",
  },
];

const Services = () => {
  return (
    <Box className="services-section">
      <Container>
        <Box my={4} className="service-dot">
          <Typography
            variant="body1"
            align="center"
            mt={5}
            style={{ color: "#00acb1", fontWeight: "bold" }}
          >
            What We do
          </Typography>
          <Typography
            variant="h3"
            align="center"
            style={{ color: "#005963", fontWeight: "bold" }}
          >
            Our Services
          </Typography>
          <Container sx={{ width: 1 / 4 }}>
            <Divider />
          </Container>
          <Typography
            variant="body1"
            pt={2}
            pb={4}
            sx={{ width: 3 / 4, mx: "auto" }}
          >
            <Typography align="center" variant="body2">
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health.
            </Typography>
          </Typography>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            columns={{ xs: 2, md: 8, lg: 12 }}
          >
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

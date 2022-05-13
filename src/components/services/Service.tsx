import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Service.css";

interface service_if {
  id: number;
  img: string;
  name: string;
  description: string;
  route: string;
}

const Service = (props: { key: number; service: service_if }) => {
  const { service } = props;

  return (
    <Grid item xs={1} md={4} lg={4} sx={{ height: "400px" }}>
      <NavLink className="text-d" to={service.route}>
        <Card
          sx={{ height: "100%", border: "1 px", p: "5px", textAlign: "center" }}
        >
          <Box
            component="img"
            src={service.img}
            sx={{ mx: "auto", p: "15px" }}
          />
          <CardContent>
            <Typography variant="h6" style={{ color: "#005963" }}>
              {service.name}
            </Typography>
            <Typography variant="body1" paragraph>
              <Box component="small">{service.description}</Box>
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </Grid>
  );
};

export default Service;

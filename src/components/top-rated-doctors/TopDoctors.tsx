import React, { useEffect, useState } from "react";
import TopSingle from "./TopSingle";
import { Idoctor } from "../favourite-doctors/FavoriteDoctors";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const TopDoctors = () => {
  const [tops, setTops] = useState<Idoctor[]>([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/v1/doctors/all?specialist=All&&gender=All&&page=${1}&&rows=${4}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTops(data.result));
  }, []);

  return (
    <Box>
      <Typography
        variant="body1"
        align="center"
        mt={5}
        style={{ color: "#00acb1" }}
      >
        Meet Our Team
      </Typography>
      <Typography variant="h2" align="center" style={{ color: "#005963" }}>
        Our Creative Experts
      </Typography>
      <Container sx={{ width: 1 / 4, pb: "20px" }}>
        <Divider />
      </Container>
      <Container>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          direction="row"
          alignItems="center"
        >
          {tops.map((top) => (
            <TopSingle key={top._id} top={top}></TopSingle>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopDoctors;

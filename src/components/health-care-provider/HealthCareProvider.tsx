import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import HealthCareProviderImg from "../../assets/health-care-provider/HealthCareProvider.png";
import "./HealthCareProvider.css";

const HealthCareProvider = () => {
  return (
    <Box className="health-care-provider-section">
      <Container>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          direction="row"
          alignItems="center"
        >
          <Grid container xs={12} lg={6} className="img-container">
            <CardMedia component="img" alt="a" image={HealthCareProviderImg} />
          </Grid>
          <Grid
            container
            justifyContent="flex-start"
            spacing={3}
            direction="row"
            alignItems="center"
            xs={12}
            lg={6}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h3"
                style={{ color: "#005963", fontWeight: "bold" }}
              >
                Leading healthcare <br />
                providers
              </Typography>

              <Box my={3} className="hr-line"></Box>
              <Typography
                variant="body2"
                className="health-care-provider-description"
              >
                Doctor Meet provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </Typography>
            </Box>
            <Button className="learn-more-button">Learn more</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HealthCareProvider;

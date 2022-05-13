import {
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import review_img from "./../../assets/img/review-img.png";
import "./Review.css";

const Review = () => {
  return (
    <Container style={{ marginBottom: "200px" }}>
      <Box className="review-bg">
        <Typography align="center" variant="body1">
          Client Testimonials
        </Typography>
        <Typography align="center" variant="h4">
          What our customers are saying.
        </Typography>
        <Divider />
        <Grid
          className="re-dot"
          container
          spacing={2}
          sx={{ paddingTop: "20px" }}
        >
          <Grid container item xs={12} md={12} lg={6}>
            <CardMedia
              sx={{ borderRadius: "50%" }}
              component="img"
              alt="a"
              style={{ width: "80px", height: "80px" }}
              image={review_img}
            />

            <Box sx={{ mx: "4", my: "auto", paddingLeft: "20px" }}>
              <Typography variant="h6">Edward Newgate</Typography>
              <Typography variant="body1"> Founder Circle </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} md={12} lg={6}>
            <Typography variant="body1" sx={{ mx: "4", my: "auto" }}>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;

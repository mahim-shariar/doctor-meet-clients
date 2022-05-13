import React from "react";
import { Icon } from "@iconify/react";
import { Box, CardMedia, Grid, Rating, Typography } from "@mui/material";
import "../single-doctor/SingleDoctor.css";

const TopSingle = (props: any) => {
  const { img, name, specialist, review } = props.top;

  return (
    <Grid container item xs={12} md={6} lg={3}>
      <Box
        sx={{
          borderRadius: "16px",
          boxShadow: 1,
          height: "100%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            alt="a"
            style={{ width: "100%", height: "280px" }}
            image={img}
            className="doctorImg"
          />
        </Box>
        <Box
          sx={{
            p: "16px",
          }}
        >
          <Typography variant="h6" className="d-name">
            {name}
          </Typography>
          <Typography variant="h5" sx={{ pb: 1 }} className="d-spec">
            {specialist}
          </Typography>
          <Typography variant="body1">
            <Icon icon="carbon:location-filled" />
            <Box component="span">Bangladesh</Box>
          </Typography>
          {/* <Rating
                        name="read-only"
                        value={review}
                        readOnly
                        size="small"
                        precision={0.5}
                    /> */}
        </Box>
      </Box>
    </Grid>
  );
};

export default TopSingle;

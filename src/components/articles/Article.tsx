import React from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
// import { Card } from "react-bootstrap";
import "./Article.css";
import { IArticle } from "./Articles";

const Article = (props: { key: number; article: IArticle }) => {
  const { img, author, title } = props.article;

  return (
    <Grid container item xs={12} md={6} lg={4} my={3}>
      <Card
        style={{
          borderRadius: "8px",
          padding: "14px",
          display: "block",
        }}
      >
        <Box style={{ position: "relative" }}>
          <CardMedia
            style={{ borderRadius: "8px" }}
            component="img"
            image={img}
            alt=""
          />

          <Box
            component="span"
            px={4}
            py={2}
            style={{
              position: "absolute",
              bottom: "-15px",
              right: "10px",
              borderRadius: "18px",
              backgroundColor: "#00acb1",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            1 MAY, 2022
          </Box>
        </Box>
        <CardContent>
          <Typography mx={1}>
            <Icon icon="bxs:user" />
            <Box component="span">{author}</Box>
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#005963",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Button>
            Read more <Icon icon="bi:arrow-right" />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Article;

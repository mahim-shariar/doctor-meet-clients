import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Article from "./Article";
import "./articles.css";

export interface IArticle {
  id: number;
  author: string;
  img: string;
  title: string;
  description: string;
}

const articles: IArticle[] = [
  {
    id: 1,
    author: "Rebeca Gilbert",
    img: "https://images.unsplash.com/photo-1550791871-0bcd47c97881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Disease detection, Check up in the laboratory...",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to ",
  },
  {
    id: 2,
    author: "Adam Smith",
    img: "https://images.unsplash.com/photo-1563233269-7e86880558a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Natural care for healthy facial skin...",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
  },
  {
    id: 3,
    author: "Clerk Thompson",
    img: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Adjusting to life with a spinal cord injury...",
    description:
      "A healthy lifestyle should start from now and also for your skin health.In this case, the role of the health laboratory is very important to",
  },
];

const Articles = () => {
  return (
    <>
      <Box className="dot-b-section">
        <Box className="artical-section">
          <Typography
            align="center"
            variant="body1"
            style={{ color: "#00acb1" }}
          >
            Latest News
          </Typography>
          <Typography align="center" variant="h3" style={{ color: "#005963" }}>
            Our Insights & Articles
          </Typography>
          <Container sx={{ width: 1 / 4 }}>
            <Divider />
          </Container>

          <Grid
            spacing={4}
            container
            my={5}
            py={3}
            px={5}
            className="dot-section"
          >
            <Grid item container sx={{ mx: "auto" }}>
              {articles.map((article) => (
                <Article key={article.id} article={article}></Article>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Articles;

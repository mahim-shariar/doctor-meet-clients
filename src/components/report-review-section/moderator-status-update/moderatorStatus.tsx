import React from "react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const moderatorStatus = () => {
  return <RootStyle></RootStyle>;
};

export default moderatorStatus;

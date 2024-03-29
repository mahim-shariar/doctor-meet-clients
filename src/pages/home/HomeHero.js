import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Box, Link, Container, Typography, Stack } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../routes/paths.tsx";
// components
import Iconify from "../../components/Iconify.tsx";
import { Banner } from "../../components/banner";

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.grey[400],
    [theme.breakpoints.up("md")]: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "fixed",
        alignItems: "center",
    },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
    ({ theme }) => ({
        zIndex: 10,
        margin: "auto",
        textAlign: "center",
        position: "relative",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            margin: "unset",
            textAlign: "left",
        },
    })
);

const HeroOverlayStyle = styled(m.img)({
    zIndex: 9,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 8,
    width: "100%",
    margin: "auto",
    position: "absolute",
    [theme.breakpoints.up("lg")]: {
        right: "8%",
        width: "auto",
        height: "48vh",
    },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
    return (
        <ContentStyle>
            <Banner />
        </ContentStyle>
    );
}

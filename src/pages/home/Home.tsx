// @mui
import { styled } from "@mui/material/styles";
import { Banner } from "../../components/banner";
import HealthCareProvider from "../../components/health-care-provider/HealthCareProvider";
import { CardMedia } from "@mui/material";
// components
import Page from "../../components/Page";
import Review from "../../components/review/Review";
import { Services } from "../../components/services";
import { Articles } from "../../components/articles";
import HomeGallery from "../../components/home-gallery/HomeGallery";
import HomeHero from "./HomeHero";
import MapDirection from "../../components/map-ditrection/MapDirection";
import TopDoctors from "../../components/top-rated-doctors/TopDoctors";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      <RootStyle>
        <ContentStyle>
          <HomeHero />

          <Services></Services>

          <HealthCareProvider></HealthCareProvider>

          <TopDoctors></TopDoctors>

          <Articles></Articles>

          <Review></Review>

          <HomeGallery></HomeGallery>
          <div className="py-5 ">
            <MapDirection></MapDirection>
          </div>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

// @mui
import { styled } from "@mui/material/styles";
import { Banner } from "../components/banner";
import HealthCareProvider from "../components/health-care-provider/HealthCareProvider";
// components
import Page from "../components/Page";
import Review from "../components/review/Review";
import { Services } from "../components/services";
import { Articles } from "./articles";
import HomeGallery from "../components/home-gallery/HomeGallery";
// sections
import { HomeHero, HomeCleanInterfaces } from "./home/index";
import Footer from "../components/footer/Footer";
import MapDirection from "./marged/map-ditrection/MapDirection";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
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

          <Review></Review>

          <HomeGallery></HomeGallery>
          <div className="py-5 ">
            <MapDirection></MapDirection>
          </div>
          <Articles></Articles>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

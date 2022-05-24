import React from "react";
import { Container } from "react-bootstrap";
import HealthCareProviderImg from "../../assets/health-care-provider/HealthCareProvider.png";
import "./HealthCareProvider.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const HealthCareProvider = () => {
  return (
    <RootStyle className="health-care-provider-section">
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-12 img-container mb-3">
            <img src={HealthCareProviderImg} alt="" />
          </div>
          <div className="col-lg-6 col-12 text-start ps-5">
            <div className="d-flex flex-column">
              <h1 className="fw-bold" style={{ color: "#005963" }}>
                Leading healthcare
              </h1>
              <h1 className="fw-bold" style={{ color: "#005963" }}>
                providers
              </h1>
              <div className="hr-line my-3 text-justify"></div>
              <p className="health-care-provider-description">
                Doctor Meet provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
            </div>
            <button
              type="button"
              className="btn learn-more-button btn-outline-primary rounded-pill px-4"
            >
              Learn more
            </button>
          </div>
        </div>
      </Container>
    </RootStyle>
  );
};

export default HealthCareProvider;

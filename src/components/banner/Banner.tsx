import React from "react";
import Carousel from "react-bootstrap/Carousel";
import TextAnimation from "./TextAnimation";
import VM from "../../assets/handdrawn-vector-60-removebg-preview (1).png";
import "./Banner.css";

const bannerData = [
    {
        text1: "Virtual Healthcare",
        text2: "For You",
        desc: "Doctor-meet provides progressive, and affordable healthcare, accessible on mobile and online for everyone.",
        btnText: "Consult Today",
        imgSrc: VM,
        to: "/virtual-meet",
    },
    {
        text1: "Fight",
        text2: "Covid-19",
        desc: "From 2020 we start a mission to provide free medical consultation to those who are affected with Covid-19",
        btnText: "Explore Now",
        imgSrc: "https://i.ibb.co/Wg8LFP0/istockphoto-1215660193-170667a-removebg-preview.png",
        to: "/covid-portal",
    },
    {
        text1: "Emergency",
        text2: "Consultant",
        desc: "Doctor Meet Provide An Emergency Health Consultant Within 1 Hour to Our Premium Members.",
        btnText: "Get Premium Membership",
        imgSrc: "https://i.ibb.co/ZzsNLrc/4162622-1-removebg-preview.png",
        to: "/premium-membership",
    },
];

const Banner = () => {
    return (
        <div className="mt-4">
            <Carousel fade={true} controls={true} indicators={true}>
                {bannerData.map((item, index) => (
                    <Carousel.Item key={index} interval={2000}>
                        <div className="d-flex justify-content-between align-items-center container">
                            <div className="w-50">
                                <TextAnimation item={item}></TextAnimation>
                            </div>
                            <div className="w-50">
                                <img
                                    className="d-block mx-auto img-fluid carousel-img"
                                    style={{ height: "400px" }}
                                    src={item.imgSrc}
                                    alt="..."
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
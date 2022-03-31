import React from "react";
import search from "../../Assets/services/search.png";
import consultation from "../../Assets/services/consultation.png";
import reports from "../../Assets/services/reports.png";
import emergency from "../../Assets/services/emergency.png";
import covid from "../../Assets/services/covid.jpg";
import blood from "../../Assets/services/blood.jpg";
import medicine from "../../Assets/services/medicine.png";
import info from "../../Assets/services/info.png";
import Service from "../Service/Service";
import { Container } from "react-bootstrap";
import "./Services.css";

interface service_if {
    id: number;
    img: string;
    name: string;
    description: string;
}

const services: service_if[] = [
    {
        id: 1,
        img: search,
        name: "Search Doctor",
        description:
            "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    },
    {
        id: 2,
        img: consultation,
        name: "Free Consultation",
        description:
            "Free consultation with our trusted doctors and get the best recomendations.",
    },
    {
        id: 3,
        img: reports,
        name: "Reports Feedback",
        description:
            "Get reports feedback from doctors with prescribed medicine.",
    },
    {
        id: 4,
        img: covid,
        name: "COVID-19 Update",
        description:
            "Get update about covid information everyday. Consult Covid Specialist from available doctors.",
    },
    {
        id: 5,
        img: blood,
        name: "Find Blood Donors",
        description:
            "No need to worry for your patients. We will manage blood donors for you.",
    },
    {
        id: 6,
        img: medicine,
        name: "Online Pharmacy",
        description:
            "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
        id: 7,
        img: info,
        name: "Tracking",
        description: "Track and save your medical history and health data ",
    },
    {
        id: 8,
        img: emergency,
        name: "Emergency Care",
        description:
            "You can get 24/7 urgent care for yourself or your children and your lovely family.",
    },
];

const Services = () => {
    return (
        <div className="services-section">
            <Container className="my-4 text-center">
                <h1 className="fw-bold">Our Services</h1>
                <hr className="w-25 mx-auto" />
                <p className="text-secondary w-75 mx-auto pt-2 pb-4">
                    <small>
                        We provide to you the best choiches for you. Adjust it
                        to your health needs and make sure your undergo
                        treatment with our highly qualified doctors you can
                        consult with us which type of service is suitable for
                        your health.
                    </small>
                </p>
                <div
                    className="
                            row row-cols-1 row-cols-md-2 row-cols-lg-3
                            g-5
                            justify-content-center
                        "
                >
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Services;
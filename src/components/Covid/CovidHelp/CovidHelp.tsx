import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import helpImg from "../../../Assets/img/need-help.svg";
import useAuth from "../../Hooks/useAuth";
import "./CovidHelp.css";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Help = () => {
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_429c7ul",
                "template_dr9cfyd",
                e.target,
                "M9AHQR1dWtEHnJG3q"
            )
            .then(
                (result: any) => {
                    if (result.text === "OK") {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Message Was Sent, Thank You',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log(result.text);
                    }
                },
                (error: any) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div className="help-section container" id="help">
            <Container>
                <h1 className="fw-bold text-center ">Need Help!</h1>
                <hr className="mx-auto hr-hight w-25" />
                <p className="text-center text-secondary w-75 my-3 mx-auto">
                    <small>
                        Protect yourself and others around you by knowing the
                        facts and taking appropriate precautions. Floow advice
                        provided by your local health authority.
                    </small>
                </p>
                <div className="my-5 pt-5 text-center row ">
                    <div className="col-lg-6">
                        <img
                            src={helpImg}
                            alt=""
                            className=" img-fluid mx-auto"
                        />
                    </div>

                    <div className="col-lg-6 my-0 p-5">
                        <div>
                            <h2 className="text-start">
                                COVID-19 enquiry form
                            </h2>
                            <p className="text-start py-3">
                                Completing the form online has been made
                                simpler. It should take no more than 20 minutes
                                to complete. Once you have received the text
                                message, you can submit the form anytime within
                                24 hours. If you do not submit the form within
                                72 hours, someone may call you and complete the
                                case interview over the phone.
                            </p>
                        </div>
                        <Button
                            variant="success"
                            className="d-block"
                            onClick={handleShow}
                        >
                            Fill Form{" "}
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>COVID-19 Enquiry Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className="covid-contact" onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-email"
                                        name="email"
                                        value={user?.email || ""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-name"
                                        name="name"
                                        value={user?.displayName || ""}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-phone"
                                        placeholder="Phone"
                                        name="phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="border-0 form-control bg-light rounded-3"
                                        id="recipient-symptoms"
                                        placeholder="Symptoms"
                                        name="sympthoms"

                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="border-0 form-control bg-light rounded-3"
                                        id="message-text"
                                        placeholder="Message in details"
                                        name="name"
                                    ></textarea>
                                </div>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Send Message{" "}
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>

                    </Modal>
                </div>
            </Container>
        </div>
    );
};

export default Help;

import React, { useState } from "react";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Modal } from "react-bootstrap";
import helpImg from "../../Assets/img/need-help.svg";
import "./CovidHelp.css";
import useAuth from "../Hooks/useAuth";
import emailjs from "emailjs-com";

const Help = () => {
  // const { user } = useAuth();

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
            alert(
              "Your Message Was Successfully Sent. Thank You !"
            );
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
        <p className="mx-auto my-3 text-secondary w-75">
          <small>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Floow advice provided by your local
            health authority.
          </small>
        </p>
        <div className="my-5 pt-5 text-center row ">
          <div className="col-lg-6">
            <img src={helpImg} alt="" className=" img-fluid mx-auto" />
          </div>

          <div className=" col-lg-6 my-3 p-5">
            <div className="p-3" >
              <h2 className="text-start p-1" >COVID-19 enquiry form</h2>
              <p className="text-start p-2" >
                Completing the form online has been made simpler. It should take
                no more than 20 minutes to complete. Once you have received the
                text message, you can submit the form anytime within 24 hours.
                If you do not submit the form within 72 hours, someone may call
                you and complete the case interview over the phone.
              </p>
            </div>
            <Button variant="success" className="d-block ms-4" onClick={handleShow}>
              Fill Frommms <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </div>

          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>COVID-19 enquiry formMMM</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="covid-contact" onSubmit={sendEmail} >
                <div className="mb-3">
                  <input
                    className="border-0 form-control bg-light rounded-3"
                    type="email"
                    id="emailId"
                    placeholder="Email"
                    // value={user.email}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"

                    placeholder="Name"
                    name="name"
                    id="nameId"
                    // value={user?.displayName}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-phone"
                    placeholder="Phone"
                    name="Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-symptoms"
                    placeholder="Symptoms"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="border-0 form-control bg-light rounded-3"
                    id="message-text"
                    name="message"
                    placeholder="Message in details"
                  ></textarea>
                </div>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {/* <Button variant="primary" type="submit">
                    Send Message <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </Button> */}
                  <input
                    className="btn btn-outline-info fw-bold"
                    type="submit"
                    value="Send Message"
                  ></input>
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

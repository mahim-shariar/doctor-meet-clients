import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import "./DonorEditModal.css";
import { Idonor } from "../blood-donor/DonorFilter";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  group: string;
  district: string;
  gender: string;
  img: string;
}

const DonorEditModal = (props: {
  show: boolean;
  handleClose: any;
  donor: Idonor;
  setIsUpdate: any;
}) => {
  const { show, handleClose, donor, setIsUpdate } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setIsUpdate(false);
    // send data to server and update in database
    const url = `http://localhost:5000/donor/${donor._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setIsUpdate(true);
        handleClose();
        Swal.fire({
          title: "Well done!",
          text: "Donor Information Updated Successfully!",
          icon: "success",
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Warning!",
          text: "Already up to date!",
          icon: "warning",
          timer: 2000,
        });
      }
    });
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="text-center fw-bold">
            Edit <span className="text-danger">Blood </span>
            Donor Information
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div
            className="
                            reg-div
                            col-10 col-md-10
                            mx-auto
                            rounded
                            my-5
                            alert-danger
                        "
          >
            <div id="donor-reg-box" className="p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-2">
                  <div className="col-12 col-lg-6">
                    <input
                      className="form-control border-danger mb-3"
                      defaultValue={donor.name}
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && <span className="fw-bold">*Required</span>}
                  </div>

                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      className="form-control border-danger"
                      defaultValue={donor.email}
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email && <span className="fw-bold">*Required</span>}
                  </div>
                </div>

                <div className="row gx-2">
                  <div className="col-12 col-lg-6 mb-3">
                    <input
                      className="form-control border-danger"
                      {...register("phone", {
                        required: true,
                      })}
                      placeholder="Phone Number"
                      defaultValue={donor.phone}
                    />
                    {errors.phone && <span className="fw-bold">*Required</span>}
                  </div>

                  <div className="col-12 col-lg-6 mb-3">
                    <select
                      {...register("group", {
                        required: true,
                      })}
                      className="form-select border-danger"
                      defaultValue={donor.group}
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                    {errors.group && <span className="fw-bold">*Required</span>}
                  </div>
                </div>
                <div className="row gx-2">
                  <div className="col-12 col-lg-6 mb-3">
                    <select
                      {...register("district", {
                        required: true,
                      })}
                      className="form-select border-danger"
                      defaultValue={donor.district}
                    >
                      <option value="">Select District</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Comilla">Comilla</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Jessore">Jessore</option>
                      <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.district && (
                      <span className="fw-bold">*Required</span>
                    )}
                  </div>

                  <div className="col-12 col-lg-6 mb-3">
                    <select
                      className="form-select border-danger"
                      {...register("gender")}
                      defaultValue={donor.gender}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <input
                  className="form-control border-danger mb-3"
                  {...register("img")}
                  placeholder="Put Your Image URL Here..."
                  defaultValue={donor.img}
                />
                <button
                  className="btn btn-outline-danger fw-bold"
                  type="submit"
                >
                  Save Changes <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DonorEditModal;

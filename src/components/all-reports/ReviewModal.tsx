import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "background.paper",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const ReviewModal = (props: any) => {
    const { modalOpen, handleClose, report, setIsUpdate } = props;

    const [text, setText] = React.useState("");
    const handleChange = (value: any) => {
        setText(value);
    };

    const handleReview = (id: string) => {
        setIsUpdate(false);
        const newReport = report;
        newReport.review = text;
        newReport.status = true;
        // console.log(newReport);
        //send review data to server
        fetch(
            `http://localhost:5000/api/v1/reportReview/${id}/62604bc2ad329b3fee220aab`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newReport),
            }
        ).then((res) => {
            if (res.status === 200) {
                setIsUpdate(true);
                Swal.fire({
                    title: "Success",
                    text: "Review Successfully Submitted!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Please Give a Review
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <small>{report?.desc}</small>
                    </Typography>
                    <Box
                        sx={{
                            my: 2,
                            mx: "auto",
                        }}
                    >
                        <div>
                            <ReactQuill
                                value={text}
                                onChange={handleChange}
                                placeholder="Write your review content here..."
                            />
                        </div>
                    </Box>
                    <Button
                        onClick={() => {
                            handleReview(report?._id);
                            handleClose();
                        }}
                        variant="contained"
                    >
                        Send
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default ReviewModal;

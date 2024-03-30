import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const SavedCodes = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSmall, setIsSmall] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>
        {isSmall
          ? "Show previous"
          : <ArrowDropDownCircleIcon fontSize="large" />}
      </Button>
      <Modal
        className="flex justify-center items-center"
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <div className="bg-gray-700 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border-2 p-3 border-gray-100 text-white min-h-40 overflow-auto w-60">
          <h2 className="md:text-2xl text-xl">Previous Work</h2>
          <p className="text-slate-300 mt-4">
            {/* name of the file entered by user */}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SavedCodes;

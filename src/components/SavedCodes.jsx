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
  const [savedData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleCodeClick = (html, css, js) => {
    document.getElementById("html").value = html;
    document.getElementById("css").value = css;
    document.getElementById("js").value = js;
    handleClose();
  };

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
        <div
          className={`bg-gray-700 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border-2 p-3 border-gray-100 text-white h-60 overflow-hidden w-60 flex justify-center items-center`}
        >
          {savedData.length > 0
            ? <div className="flex flex-col items-center gap-2 h-full">
                <h2 className="md:text-2xl text-xl text-center">
                  Previous Work
                </h2>
                <div className="flex flex-col gap-2 overflow-scroll h-full">
                  {savedData.map((data, index) =>
                    <button
                      key={index}
                      onClick={() =>
                        handleCodeClick(data.html, data.css, data.js)}
                      className="text-white hover:text-gray-200"
                    >
                      {data.name}
                    </button>
                  )}
                </div>
              </div>
            : <p>No Saved data yet</p>}
        </div>
      </Modal>
    </div>
  );
};

export default SavedCodes;

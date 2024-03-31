import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const SaveButton = () => {
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

  const saveFile = () => {
    let fileName = document.getElementById("filename").value;
    if (!fileName) {
      toast.error("Enter the file name");
    } else if (fileName.length < 5) {
      toast.error("Name it more than 5 characters");
    } else {
      let htmlCode = document.getElementById("html").value;
      let cssCode = document.getElementById("css").value;
      let jsCode = document.getElementById("js").value;
      let file = {
        [fileName]: {
          htmlCode,
          cssCode,
          jsCode
        }
      };
      const savedFiles = JSON.parse(localStorage.getItem("savedFiles")) || [];
      savedFiles.push(file);
      localStorage.setItem("savedFiles", JSON.stringify(savedFiles));
      if (savedFiles) {
        toast.success("File Saved");
        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        {isSmall ? "Save Work" : <SaveAltIcon fontSize="large" />}
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
        <div className="bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 border-2 p-5 border-gray-800 text-black">
          <h2>Save Your Work</h2>
          <form className="flex md:flex-row flex-col mt-5 gap-4">
            <TextField
              label="Enter task name"
              placeholder="my first task"
              multiline
              id="filename"
            />
            <Button onClick={saveFile}>Save</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SaveButton;

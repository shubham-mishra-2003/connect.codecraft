import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SavedButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Save Work</Button>
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
              label="Enter taks name"
              placeholder="my first task"
              multiline
            />
            <Button>Save</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SavedButton;

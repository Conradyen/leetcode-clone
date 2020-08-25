import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { modalToggleProp } from "./modeltype";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      display: "block",
      alignItems: "left",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    textInput: {
      width: "100%",
      minWidth: "300px",
    },
  })
);

export const AddUserModel: React.FC<modalToggleProp> = ({
  toggleOpen,
  toggleClose,
  open,
}) => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e: any) => {
    setUserEmail(e.target.value);
  };

  return (
    <div>
      <Button onClick={toggleOpen}>Add User</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={toggleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add User</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  className={classes.textInput}
                  id="standard-basic"
                  label="User Name"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div>
                {" "}
                <TextField
                  className={classes.textInput}
                  id="standard-basic"
                  label="User Email"
                  value={userEmail}
                  onChange={handleUserEmailChange}
                />
              </div>

              <Button variant="contained" color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

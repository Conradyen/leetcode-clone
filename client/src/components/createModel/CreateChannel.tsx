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
        margin: theme.spacing(2),
        // width: "25ch",
      },
    },
    div: {
      width: "100%",
    },
  })
);

export const CreateChannel: React.FC<modalToggleProp> = ({
  toggleOpen,
  toggleClose,
  open,
}) => {
  const classes = useStyles();
  const [channelName, setChannelName] = useState("");

  const handleChannelNameChange = (e: any) => {
    setChannelName(e.target.value);
  };
  return (
    <div>
      <Button onClick={toggleOpen}>New Channel</Button>
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
            <h2 id="transition-modal-title">Create new Channel</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  className={classes.div}
                  id="standard-basic"
                  label="Channel Name"
                  value={channelName}
                  onChange={handleChannelNameChange}
                />
              </div>
              <Button variant="contained" color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Create Channel
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

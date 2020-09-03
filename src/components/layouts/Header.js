import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

import { red } from "@material-ui/core/colors";
import ClearIcon from "@material-ui/icons/Clear";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    maxWidth: "100%",
    padding: theme.spacing(1),
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    flexGrow: 1,
    fontFamily: "Pyidaungsu",
  },
  leftAlignDialogActions: {
    justifyContent: "center",
  },
  dialogTitle: {
    backgroundColor: "blue",
    color: "white",
  },
  addIcon: {
    // flex: 1,
    // alignSelf: "flex-end",
  },
}));

export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const [postSuccessOpen, setPostSuccessOpen] = React.useState(false);
  const [dep, setDep] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onTextFieldChange = (e) => {
    const { value } = e.target;
    setDep(value);
  };
  const handlePostSuccessClose = () => {
    setPostSuccessOpen(false);
  };
  const addDep = () => {
    props.addDep(dep);
    setOpen(false);
    setPostSuccessOpen(true);
  };
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid Item xs = {10}>
          <Typography variant="h6" style={{ fontFamily: "pyidaungsu" }}>
            Department Listening
          </Typography>
        </Grid>
        <Grid Item xs = {2}>
          <AddCircleIcon
            onClick={handleClickOpen}
            style={{ color: green[500], fontSize: 40 }}
            className={classes.addIcon}
          />
        </Grid>
      </Grid>
      <Dialog
        // style={{ width: "30%", margin: "auto" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Create Department
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Department Name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="dep_name"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(text) => onTextFieldChange(text)}
          />
        </DialogContent>
        <DialogActions className={classes.leftAlignDialogActions}>
          <Button onClick={addDep} color="primary" variant="outlined">
            Save
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={postSuccessOpen}
        onClose={handlePostSuccessClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Grid container spacing={1}>
            <div item xs={5}>
              <CheckCircleOutlineIcon
                style={{ color: green[500], fontSize: 25 }}
              />
            </div>
            {"  "}
            <DialogContentText
              item
              xs={7}
              style={{ marginLeft: 10 }}
              id="alert-dialog-description"
            >
              Your data is successfully Created!
            </DialogContentText>
            <ClearIcon
              onClick={handlePostSuccessClose}
              style={{ color: red[900], fontSize: 20, marginLeft: 10 }}
            />
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

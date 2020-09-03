import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ClearIcon from '@material-ui/icons/Clear';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    width: "100%",
    flex: 1,
    fontFamily: "Pyidaungsu",
    marginTop: theme.spacing(1),
  },
  headerTitle: {
    paddingLeft: theme.spacing(1),
  },
  leftAlignDialogActions: {
    justifyContent: "center",
  },
  dialogTitle: {
    backgroundColor: "blue",
    color: "white",
  },
  line: {
    width: "100%",
    height: "2px",
    backgroundColor: "gray",
  },
}));

export default function DepItem(props) {
  const classes = useStyles();
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [updateSuccessOpen, setupdateSuccessOpen] = React.useState(false);
  const [depName, setDepName] = React.useState(props.dep_name);


  const handleClickEditOpen = () => {
    setUpdateOpen(true);
    // setDep([])
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleUpdateSuccessClose = () => {
    setupdateSuccessOpen(false);
  };

 

  const handleClickDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  const onUpdateTextFieldChange = (e) => {
    const { value } = e.target;
    setDepName(value);
  };
  const handleOnUpdateClick = () => {
    props.updateDep({
      _id: props._id,
      dep_name: depName,
    });
    setUpdateOpen(false);
    setupdateSuccessOpen(true);
  };
  const handleOnDeleteClick = () => {
    props.deleteDep({
      _id: props._id,
      dep_name: depName,
    });
    setDeleteOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.headerTitle}>
        <Grid Item xs={2}>
          <Typography style={{ fontFamily: "pyidaungsu" }}>
            {props.index + 1}
          </Typography>
        </Grid>
        <Grid Item xs={8}>
          <Typography style={{ fontFamily: "pyidaungsu" }}>
            {props.dep_name}
          </Typography>
        </Grid>
        <Grid Item xs={1}>
          <EditIcon
            onClick={handleClickEditOpen}
            style={{ color: green[500] }}
          />
        </Grid>
        <Grid Item xs={1}>
          <DeleteOutlineIcon
            onClick={handleClickDeleteOpen}
            style={{ color: red[500] }}
          />
        </Grid>
      </Grid>
      <Dialog
        style={{ width: "30%", margin: "auto" }}
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Update Department
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
            onChange={(e) => onUpdateTextFieldChange(e)}
            defaultValue={depName}
          />
        </DialogContent>
        <DialogActions className={classes.leftAlignDialogActions}>
          <Button
            onClick={handleOnUpdateClick}
            color="primary"
            variant="outlined"
          >
            Update
          </Button>
          <Button
            onClick={handleUpdateClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete the data?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.leftAlignDialogActions}>
          <Button onClick={handleOnDeleteClick} color="primary"
           variant="outlined">
            Yes
          </Button>
          <Button onClick={handleDeleteClose} color="primary" autoFocus
           variant="outlined">
            No
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={updateSuccessOpen}
        onClose={handleUpdateSuccessClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Grid container spacing={1}>
            <div item xs = {5}>
              <CheckCircleOutlineIcon  style={{ color: green[500],fontSize : 25 }}  />
            </div>
            {"  "}
            <DialogContentText item xs = {7} style= {{marginLeft : 10}} id="alert-dialog-description">
              Your data is successfully updated!
            </DialogContentText>
            <ClearIcon onClick = {handleUpdateSuccessClose} style = {{color : red[900],fontSize : 20,marginLeft:10}}/>
          </Grid>
        </DialogContent>
      </Dialog>

      
    </div>
  );
}

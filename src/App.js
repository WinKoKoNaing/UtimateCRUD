import React, { useEffect } from "react";
import Header from "./components/layouts/Header";
import DepList from "./components/DepList";
import DepService from "./services/depService";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Grid from "@material-ui/core/Grid";
import ClearIcon from '@material-ui/icons/Clear';

import { green, red } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

function App() {
  useEffect(() => {
    console.log(department.departments);
    if (department.departments.length <= 0) {
      console.log("use effect");
      getDeps();
    }
  });

  const [deleteSuccessOpen, setDeleteSuccessOpen] = React.useState(false);
  const handleDeleteSuccessClose = () => {
    setDeleteSuccessOpen(false);
  };

  const [department, setDep] = React.useState({
    departments: [],
  });
  const getDeps = async () => {
    console.log("GetDep");
    let res = await DepService.getAll();
    setDep({ departments: res.deps });
    console.log(res);
  };
  const updateDepPost = async (dep) => {
    let res = await DepService.updateDep(dep);
    console.log(res);
    getDeps();
  };
  const deleteDepPost = async (dep) => {
    let res = await DepService.deleteDep(dep);
    console.log(res);
    getDeps();
    setDeleteSuccessOpen(true)
  };
  const updateDep = (dep) => {
    console.log(dep.dep_name);
    updateDepPost(dep);
    // setDep({
    //   departments: department.departments.map((department) => {
    //     if (department._id === dep._id) {
    //       department.dep_name = dep.dep_name;
    //     }
    //     return department;
    //   }),
    // });
  };
  const deleteDep = (dep) => {
    // setDep({
    //   departments: department.departments.filter(
    //     (department) => department._id !== dep._id
    //   ),
    // });
    deleteDepPost(dep);
  };
  const postDep = async (dep) => {
    let res = await DepService.postDep(dep);
    console.log(res);
    getDeps();
  };
  const addDep = (dep_name) => {
    const dep = {
      dep_name: dep_name,
    };
    postDep(dep);
    // setDep({ departments: [...department.departments, dep] });
    console.log(dep_name + " From App Js.");
  };
  return (
    <div>
      <Header addDep={addDep} />
      <DepList
        dep={department.departments}
        updateDep={updateDep}
        deleteDep={deleteDep}
      />
      <Dialog
        open={deleteSuccessOpen}
        onClose={handleDeleteSuccessClose}
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
            Your data is successfully Deleted!
            </DialogContentText>
            <ClearIcon onClick = {handleDeleteSuccessClose} style = {{color : red[900],fontSize : 20,marginLeft:10}}/>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;

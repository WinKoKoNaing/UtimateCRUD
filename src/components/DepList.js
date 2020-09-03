import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import DepItem from "./DepItem";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    paddingLeft: theme.spacing(1),
    flex: 1,
    marginLeft: theme.spacing(1),
    fontFamily: "Pyidaungsu",
  },
  headerTitle: {
    padding: theme.spacing(1),
  },
  line: {
    width: "100%",
    height: "2px",
    backgroundColor: "gray",
  },
  empty :{
    width: "100%",
    color:'red',
    textAlign : "center"
  }
}));

export default function DepList(props) {
  const classes = useStyles();
  const updateDep = (dep) => {
    props.updateDep(dep);
  };
  const deleteDep = (dep) => {
    props.deleteDep(dep);
  };
  return (
    <div className={classes.root}>
      <div className={classes.line}></div>
      <Grid container direction="row" className={classes.headerTitle}>
        <Grid Item xs={2}>
          <Typography style={{ fontFamily: "pyidaungsu" }}>No.</Typography>
        </Grid>
        <Grid Item xs={10}>
          <Typography style={{ fontFamily: "pyidaungsu" }}>
            Department Name
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.line}></div>

      {props.dep.length > 0 ? (
        props.dep.map(({ _id, dep_name }, index) => (
          // console.log(_id+" From List")
          <DepItem
            index={index}
            key={_id}
            _id={_id}
            dep_name={dep_name}
            updateDep={updateDep}
            deleteDep={deleteDep}
          />
        ))
      ) : (
        <p className = {classes.empty}>There is no department ?</p>
      )}
    </div>
  );
}

import React from "react";
import { sizing } from "@material-ui/system/";
import {
  Paper,
  Card,
  Typography,
  makeStyles,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageProfilePhoto: {
    display: "inline-block",
    sizing,
    maxHeight: 72,
    maxWidth: 72,
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
  pageButton: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, profileImage, logoutIcon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon} onClick={props.logoutFuntion}>
          {logoutIcon}
        </Card>
        <Card className={classes.pageProfilePhoto}>
          <CardMedia
            component="img"
            image={profileImage}
            alt=""
          />
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

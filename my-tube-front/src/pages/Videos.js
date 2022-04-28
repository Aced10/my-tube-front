import React, { useState } from "react";
import ExitToApp from "@material-ui/icons/ExitToApp";
import {
  Paper,
  makeStyles,
  Toolbar,
  InputAdornment,
  TablePagination,
  Grid,
} from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import CardVideo from "../components/CardVideo";
import Controls from "../components/controls/Controls";
import { Search } from "@material-ui/icons";
import { searchVideos } from "../services/VideosServices";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "100%",
  },
}));

export default function Videos(props) {
  const classes = useStyles();
  const [records, setRecords] = useState();
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const loginData = JSON.parse(localStorage.getItem("loginData"));

  const handleSearch = async (e) => {
    let target = e.target;
    let result = await searchVideos(target.value, rowsPerPage, null);
    setRecords(result.data.data);
    setKeyword(target.value);
  };

  const handleChangePage = async (event, newPage) => {
    let result = await searchVideos(
      keyword,
      rowsPerPage,
      newPage < page ? records?.prevPageToken : records?.nextPageToken
    );
    setRecords(result.data.data);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    let result = await searchVideos(keyword, event.target.value, null);
    setRecords(result.data.data);
    setPage(0);
  };

  return (
    <>
      <PageHeader
        title="MyTube Videos"
        subTitle={loginData.name}
        profileImage={loginData.picture}
        logoutIcon={<ExitToApp fontSize="large" />}
        logoutFuntion={props.logoutFuntion}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Videos"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <Grid container spacing={5} >
          {records?.items?.map((item) => (
            <Grid key={item.id} item xs={12} md={4} lg={3}>
              <CardVideo video={item} />
            </Grid>
          ))}
        </Grid>

        <TablePagination
          component="div"
          page={page}
          rowsPerPageOptions={pages}
          rowsPerPage={rowsPerPage}
          count={records?.pageInfo?.totalResults ?? 0}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

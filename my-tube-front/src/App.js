import GoogleLogin from "react-google-login";
import { useState } from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";

import { loginService } from "./services/LoginServices";

import Videos from "../src/pages/Videos";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const handleLogin = async (googleData) => {
    const res = await loginService(googleData);
    setLoginData(res?.data);
    localStorage.setItem("loginData", JSON.stringify(res?.data));
  };
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <div className={useStyles.appMain}>
      {loginData ? (
        <Videos logoutFuntion={handleLogout} />
      ) : (
        <Grid container direction="column" alignItems="center" justify="center" style={{textAlign: "center"}}>
          <Card s={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="192"
              width="192"
              image={window.location.origin + "/logo512.png"}
            />
          </Card>
          <Box m={5} p={5}>
            <Typography variant="h3" component="div">
              MyTube App
            </Typography>
          </Box>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </Grid>
      )}
    </div>
  );
}

export default App;

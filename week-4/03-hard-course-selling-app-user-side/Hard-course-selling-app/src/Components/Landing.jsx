import React, { useEffect, useState } from "react";
import ShowCourses from "./ShowCourses";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
  const [loggedin, setLoggedin] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedin(true);
    } else {
      nav("/");
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setLoggedin(false);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to course selling website!
            </Typography>
            <Button color="inherit" onClick={() => nav("/courses/purchased")}>
              Purchased Courses
            </Button>
            <Button color="inherit">
              {loggedin ? (
                <button onClick={logout}>LOGOUT</button>
              ) : (
                <a href="/login">LOGIN</a>
              )}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <br />
      <CreateCourse />
      <br /> */}
      <ShowCourses />
      <br />
    </div>
  );
}

export default Landing;

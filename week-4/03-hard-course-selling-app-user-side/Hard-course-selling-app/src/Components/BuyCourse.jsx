import React, { useDebugValue, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function BuyCourse() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [courseDetails, setCourseDetails] = React.useState();
  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    async function getCourses() {
      const token = localStorage.getItem("token");
      const data = await fetch("http://localhost:3000/admin/courses", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();
      const Details = res.find((c) => c.id == loc.state.data.id);
      if (Details) {
        setTitle(Details.title);
        setDesc(Details.desc);
        setPrice(Details.price);
        setCourseDetails(Details);
      }
    }
    getCourses();
  }, [loc.state.data.id]);

  async function buy() {
    const token = localStorage.getItem("token");
    const data = await fetch(
      `http://localhost:3000/users/courses/${loc.state.data.id} `,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const res = await data.json();
    if (res) {
      alert("Course Bought");
      nav("/");
    } else {
      alert("error in buy");
    }
  }

  const bull = (
    <Box component="span" sx={{ mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
          Course Details
        </Typography>
        <Typography sx={{ margin: 2 }} component="div">
          {courseDetails?.title}
        </Typography>
        <Typography sx={{ margin: 2 }} component="div" color="text.primary">
          {courseDetails?.desc}
        </Typography>
        <Typography sx={{ margin: 2 }} component="div" color="text.primary">
          {courseDetails?.price}
        </Typography>
        <Typography variant="body2">
          <Button variant="contained" onClick={buy}>
            Buy
          </Button>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    // <div>
    //   <h1>Create Course Page</h1>
    //   title- <input type={"text"} onChange={(e) => setTitle(e.target.value)} />
    //   <br />
    //   description-{" "}
    //   <input type={"text"} onChange={(e) => setDesc(e.target.value)} />
    //   <br />
    //   price- <input type={"text"} onChange={(e) => setPrice(e.target.value)} />
    //   <br />
    //   <button onClick={create}>Create Course</button>
    // </div>
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
            <Button color="inherit" onClick={() => nav("/")}>
              Back to Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="flex justify-center items-center mt-[20em]">
        <Box sx={{ width: 400 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </div>
  );
}
export default BuyCourse;

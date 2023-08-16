import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [price, setPrice] = React.useState("");
  const nav = useNavigate();

  async function create() {
    const token = localStorage.getItem("token");
    const data = await fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        price: price,
      }),
    });
    const res = await data.json();
    if (res) {
      alert("Course created");
    } else {
      alert("error in create");
    }
    console.log(res);
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
          Create Course
        </Typography>
        <Typography component="div">
          <input
            type={"text"}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-solid my-2 p-1"
            placeholder="Title"
          />
        </Typography>
        <Typography component="div" color="text.primary">
          <input
            type={"text"}
            onChange={(e) => setDesc(e.target.value)}
            className="border-2 border-solid my-2 p-1"
            placeholder="Description"
          />
        </Typography>
        <Typography component="div" color="text.primary">
          <input
            type={"text"}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-solid my-2 p-1"
            placeholder="Price"
          />
        </Typography>
        <Typography variant="body2">
          <Button variant="contained" onClick={create}>
            Create
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
export default CreateCourse;

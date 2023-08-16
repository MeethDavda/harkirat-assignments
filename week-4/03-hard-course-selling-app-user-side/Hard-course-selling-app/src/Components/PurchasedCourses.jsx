import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleCourse from "./SingleCourse";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function PurchasedCourses() {
  const [courses, setCourses] = React.useState([]);
  const nav = useNavigate();

  useEffect(() => {
    async function getCourses() {
      const token = localStorage.getItem("token");
      const data = await fetch("http://localhost:3000/users/purchasedCourses", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();

      setCourses(res.purchasedCourses);
    }
    getCourses();
  }, []);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
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
            <Button color="inherit" onClick={() => nav("/")}>
              Back to Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex justify-center items-center flex-col mt-36">
        <h1 className="text-3xl mb-5">Show Course Page</h1>
        <div className="flex flex-row flex-wrap w-[60%] justify-between ">
          {courses.map((c, index) => (
            <SingleCourse data={c} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// function Course(props) {
//   return (
//     <div>
//       <h1>{props.data.title}</h1>
//       {/* <h3>{props.data.desc}</h3>
//       <p>$-{props.data.price}</p> */}
//     </div>
//   );
// }

export default PurchasedCourses;

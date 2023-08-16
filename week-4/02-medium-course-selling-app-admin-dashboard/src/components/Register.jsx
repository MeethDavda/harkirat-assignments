import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const nav = useNavigate();

  async function signUp() {
    const data = await fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: pass,
      }),
    });
    const res = await data.json();
    localStorage.setItem("token", res.token);
    nav("/login");
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
          Login
        </Typography>
        <Typography component="div">
          <input
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-solid my-2 p-1"
            placeholder="Email"
          />
        </Typography>
        <Typography component="div" color="text.primary">
          <input
            type={"text"}
            onChange={(e) => setPass(e.target.value)}
            className="border-2 border-solid my-2 p-1"
            placeholder="Password"
          />
        </Typography>
        <Typography variant="body2">
          <Button variant="contained" onClick={signUp}>
            Register
          </Button>
        </Typography>
        <Typography variant="body2">
          New here?
          <Button sx={{ marginTop: 2 }} variant="contained" href="/login">
            Login
          </Button>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="flex justify-center items-center mt-[20em]">
      <Box sx={{ width: 500 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}

export default Register;

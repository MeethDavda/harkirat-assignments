import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function SingleCourse(props) {
  const nav = useNavigate();

  return (
    <div>
      <Card sx={{ width: 300 }}>
        {/* <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.desc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $-{props.data.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              nav("/update", { state: props });
            }}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SingleCourse;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleCourse from "./SingleCourse";

function ShowCourses() {
  const [courses, setCourses] = React.useState([]);
  const nav = useNavigate();

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
      setCourses(res);
    }
    getCourses();
  }, []);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <div className="flex justify-center items-center flex-col mt-36">
      <h1 className="text-3xl mb-5">Show Course Page</h1>
      <div className="flex flex-row flex-wrap w-[60%] justify-between ">
        {courses.map((c, index) => (
          <SingleCourse data={c} key={index} />
        ))}
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

export default ShowCourses;

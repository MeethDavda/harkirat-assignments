import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ShowCourses from "./Components/ShowCourses";
import SingleCourse from "./Components/SingleCourse";
import BuyCourse from "./Components/BuyCourse";
import PurchasedCourses from "./Components/PurchasedCourses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/purchased" element={<PurchasedCourses />} />
        <Route path="/courses" element={<ShowCourses />} />
        <Route path="/singleCourse" element={<SingleCourse />} />
        <Route path="/courses/:id" element={<BuyCourse />} />
      </Routes>
    </Router>
  );
}

export default App;

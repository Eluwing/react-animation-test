import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SliderTest from "./SliderTest";
import AnimationTest from "./AnimaionTest";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationTest />} />
        <Route path="/slider" element={<SliderTest />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
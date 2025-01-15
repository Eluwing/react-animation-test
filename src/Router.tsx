import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SliderTest from "./SliderTest";
import AnimationTest from "./AnimaionTest";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-animation-test/" element={<AnimationTest />} />
        <Route path="/react-animation-test/slider" element={<SliderTest />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
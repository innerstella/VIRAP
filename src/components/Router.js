import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contamination from "../pages/Contamination";
import Excel from "../pages/Excel";
import Home from "../pages/Home";
import SizeCheck from "../pages/SizeCheck";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/inputdata" element={<SizeCheck />} />
        <Route path="/contamination" element={<Contamination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

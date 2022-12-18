import { BrowserRouter, Routes, Route } from "react-router-dom";
import Excel from "../pages/Excel";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excel" element={<Excel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

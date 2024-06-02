import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./Components/Form1.jsx";
import Edit from "./Components/Edit";
import ViewData from "./Components/ViewData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addForm" element={<Form1 />}></Route>
          <Route path="/editdata/:id" element={<Edit />}></Route>
          <Route path="/viewdata/:id" element={<ViewData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

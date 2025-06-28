import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Post from "./Post";
import Viewall from "./Viewall";
import Edit from "./Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Post />} />
          <Route path="/viewall" element={<Viewall />} />
          <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

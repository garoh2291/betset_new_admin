import React from "react";
import { Route, Routes } from "react-router-dom";
import { NewOrdinarPage } from "../Pages/NewOrdinarPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<NewOrdinarPage />} />
      <Route path="/ordinar-board" element={<NewOrdinarPage />} />
    </Routes>
  );
};

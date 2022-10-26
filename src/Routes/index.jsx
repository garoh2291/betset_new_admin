import React from "react";
import { Route, Routes } from "react-router-dom";
import { NewExpressPage } from "../Pages/NewExpressPage";
import { NewOrdinarPage } from "../Pages/NewOrdinarPage";
import { OrdinarBoardPage } from "../Pages/OrdinarBoardPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<NewOrdinarPage />} />
      <Route path="/ordinar-board" element={<OrdinarBoardPage />} />
      <Route path="new-express" element={<NewExpressPage />} />
    </Routes>
  );
};

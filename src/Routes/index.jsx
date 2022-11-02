import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequaireAuth } from "../hoc";
import { DashboardPage } from "../Pages/DashboardPage";
import { ExpressBoardPage } from "../Pages/ExpressBoardPage";
import { LoginPage } from "../Pages/LoginPage";
import { NewExpressPage } from "../Pages/NewExpressPage";
import { NewOrdinarPage } from "../Pages/NewOrdinarPage";
import { OrdinarBoardPage } from "../Pages/OrdinarBoardPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequaireAuth>
            <DashboardPage />
          </RequaireAuth>
        }
      >
        <Route path="" element={<ExpressBoardPage />} />
        <Route path="ordinar-board" element={<OrdinarBoardPage />} />
        <Route path="new-express" element={<NewExpressPage />} />
        <Route path="new-ordinar" element={<NewOrdinarPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequaireAuth } from "../hoc";
import { LoginPage } from "../Pages/LoginPage";
import { NewExpressPage } from "../Pages/NewExpressPage";
import { NewOrdinarPage } from "../Pages/NewOrdinarPage";
import { OrdinarBoardPage } from "../Pages/OrdinarBoardPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<NewOrdinarPage />} />
      <Route
        path="/ordinar-board"
        element={
          <RequaireAuth>
            <OrdinarBoardPage />
          </RequaireAuth>
        }
      />
      <Route
        path="new-express"
        element={
          <RequaireAuth>
            <NewExpressPage />
          </RequaireAuth>
        }
      />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

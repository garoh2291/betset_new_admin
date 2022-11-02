import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import "./styles.css";

export const DashboardPage = () => {
  return (
    <div className="dashboard_page_main_wrapper">
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

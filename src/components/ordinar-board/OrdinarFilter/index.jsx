import React from "react";
import { SportTypeFilter } from "./SportTypeFilter";
import "./styles.css";

export const OrdinarFilter = ({ getTasks }) => {
  return (
    <div className="ordinar_filter_wrapper">
      <SportTypeFilter getTasks={getTasks} />
    </div>
  );
};

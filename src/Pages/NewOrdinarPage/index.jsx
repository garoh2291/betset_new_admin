import React from "react";
import { NewOrdinar } from "../../components/new-ordinar";
import { checkProbability } from "../../helpers";
import "./styles.css";

export const NewOrdinarPage = () => {
  return (
    <div className="new_ordinar_page_wrapper">
      <NewOrdinar />
    </div>
  );
};

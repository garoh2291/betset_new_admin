import { Button } from "@mui/material";
import React from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "../NavItem";
import "./styles.css";

const { new_ordinar, ordinar_board, new_express, express_board } = NAVBAR_PAGES;

export const Navbar = () => {
  return (
    <ul className="navigation_list">
      <NavItem label={new_ordinar.label} link={new_ordinar.link} />
      <NavItem label={ordinar_board.label} link={ordinar_board.link} />
      <NavItem label={new_express.label} link={new_express.link} />
      <NavItem label={express_board.label} link={express_board.link} />
      <Button
        variant="contained"
        color="error"
        sx={{ mt: 2, mr: 2, width: 150 }}
      >
        <a
          href={"http://043cdn.com"}
          rel="noreferrer"
          target="_blank"
          style={{ color: "white" }}
        >
          Upload Files
        </a>
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ mt: 2, mr: 2, width: 150 }}
      >
        <a
          href={"https://manychat.com/fb500870/dashboard"}
          rel="noreferrer"
          target="_blank"
          style={{ color: "white" }}
        >
          Manychat
        </a>
      </Button>
    </ul>
  );
};

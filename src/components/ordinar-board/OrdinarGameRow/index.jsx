import React from "react";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";
import * as moment from "moment";
import { sportType } from "../../../helpers";
import "./styles.css";

export const OrdinarGameRow = ({
  game,
  deleteGameHandler,
  editModalOpenHandler,
  previewModalOpenHandler,
}) => {
  const { _id, matchDay } = game;

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: matchDay === "yes" ? "#96ffbf" : "",
      }}
      className="table_row"
    >
      <TableCell component="th" scope="row" align="center">
        {sportType(game.sport)}
      </TableCell>
      <TableCell align="center">{game.league.en}</TableCell>
      <TableCell align="center">
        {moment(game.date).format("DD-MM-YYYY")}
      </TableCell>

      <TableCell align="center">
        <div className="event_teams">
          <span>{game.team1.en}</span>
          <span>{game.team2.en}</span>
        </div>
      </TableCell>
      <TableCell
        align="center"
        sx={{ color: "#0F7B0F", fontWeight: "600", fontSize: "11px" }}
      >
        {game.position.en}
      </TableCell>
      <TableCell align="center">{game.risk}</TableCell>
      <TableCell align="center">{game.coeff.toFixed(2)}</TableCell>
      <TableCell align="center">
        <div className="description_span">
          <Tooltip title={game.description.en} placement="top-start">
            <IconButton>
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </div>
      </TableCell>
      <TableCell align="center" className="action_cell">
        <button className="view_button_rev">
          <RemoveRedEyeIcon
            style={{ height: 20, width: 20 }}
            onClick={() => previewModalOpenHandler(game)}
          />
        </button>
        <button className="delete_button_prev">
          <DeleteTwoTone
            style={{ height: 20, width: 20 }}
            onClick={() => deleteGameHandler(_id)}
          />
        </button>
        <button className="change_button_prev">
          <EditTwoTone
            style={{ height: 20, width: 20 }}
            onClick={() => editModalOpenHandler(game)}
          />
        </button>
      </TableCell>
    </TableRow>
  );
};

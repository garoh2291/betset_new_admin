import { TableCell, TableRow } from "@mui/material";
import { sportType } from "../../../../helpers";
import "./styles.css";

export const BetBodyPrev = ({ isSlipActive, lang, row }) => {
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className="table_row"
    >
      <TableCell component="th" scope="row" align="center">
        {sportType(row.sport)}
      </TableCell>
      <TableCell align="center" sx={{ padding: "1px", fontSize: "12px" }}>
        {row.league[lang]}
      </TableCell>
      <TableCell align="center" sx={{ padding: "1px" }}>
        <div className="event_teams">
          <span>{row.team1[lang]}</span>
          <span>{row.team2[lang]}</span>
        </div>
      </TableCell>
      <TableCell
        align="center"
        sx={{
          color: "#0F7B0F",
          fontWeight: "600",
          fontSize: "11px",
          padding: "1px",
        }}
      >
        {isSlipActive && row.position[lang]}
      </TableCell>
      <TableCell align="center" className="delete_cell">
        {isSlipActive && row.coeff.toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

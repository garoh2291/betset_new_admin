import { useContext } from "react";
import { GameContext } from "../../../context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BETSLIP_DATA } from "../../../data";
import { BetBodyPrev } from "./BetBodyPrev";
import { uid } from "../../../helpers";

export const ExpressTablePrev = ({ lang, isDemo }) => {
  const { betGames } = useContext(GameContext);

  return (
    <div className="table_wrapper_main">
      <TableContainer
        component={Paper}
        sx={{
          width: "90%",
          mt: 2,
          mb: 2,
          ml: "5%",
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "1px solid #c7c7c7",
          overflow: "hidden",
          padding: "1px",
        }}
      >
        <Table
          size="small"
          aria-label="a dense table"
          sx={{ overflow: "hidden" }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "600" }}>
                {BETSLIP_DATA.headSport[lang]}
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "600" }}>
                {BETSLIP_DATA.headLeague[lang]}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 260 }}
                align="center"
              >
                {BETSLIP_DATA.headEvent[lang]}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 150 }}
                align="center"
              >
                {BETSLIP_DATA.headBet[lang]}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 150 }}
                align="center"
              >
                {BETSLIP_DATA.headCf[lang]}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {betGames.map((row) => (
              <BetBodyPrev
                key={uid()}
                isSlipActive={isDemo === "real" ? true : false}
                lang={lang}
                row={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

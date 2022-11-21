import React from "react";
import {
  TableBody,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DeleteGameThunk } from "../../../redux/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";

import "./styles.css";
import { OrdinarGameRow } from "../OrdinarGameRow";

export const OrdinarBoardTable = ({
  editModalOpenHandler,
  previewModalOpenHandler,
}) => {
  const { games } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  if (!games) {
    return <Skeleton active />;
  }

  const deleteGameHandler = (_id) => {
    dispatch(DeleteGameThunk(_id));
  };

  return (
    <div className="game_table_wrapper">
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
                Sport
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "600", maxWidth: 100 }}
              >
                League
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "600" }}>
                Date
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 180 }}
                align="center"
              >
                Sides
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 150 }}
                align="center"
              >
                Position
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 100 }}
                align="center"
              >
                Risk Factor
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 100 }}
                align="center"
              >
                Coefficient
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Description
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", minWidth: 200 }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((game) => (
              <OrdinarGameRow
                key={game._id}
                game={game}
                deleteGameHandler={deleteGameHandler}
                editModalOpenHandler={editModalOpenHandler}
                previewModalOpenHandler={previewModalOpenHandler}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

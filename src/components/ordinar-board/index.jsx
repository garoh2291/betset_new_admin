import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateQuery } from "../../helpers";
import { getAllGamesThunk } from "../../redux/gameSlice";
import { getUserDetailsThunk } from "../../redux/userSlice/user-async";
import { EditModal } from "../EditModal";
import { OrdinarBoardTable } from "./OrdinarBoardTable";
import { OrdinarFilter } from "./OrdinarFilter";

import "./styles.css";

export const OrdinarBoard = () => {
  const [searchSortQuery, setSearchSortQuery] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cb = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );

  //Edit Existing ordinars
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editModalGame, setEditModalGame] = useState(null);

  const editModalOpenHandler = useCallback(
    (game) => {
      if (isEditOpen) {
        setIsEditOpen(false);
        setEditModalGame(null);
      } else {
        setIsEditOpen(true);
        setEditModalGame(game);
      }
    },
    [isEditOpen]
  );
  //////

  const getTasksClosure = (filterEntries) => {
    const newArr = searchSortQuery.filter((item) => {
      return item.queryRoute === filterEntries.queryRoute;
    });
    if (newArr.length === 0) {
      setSearchSortQuery((prev) => {
        return [...prev, filterEntries];
      });
    } else {
      setSearchSortQuery((prev) => {
        return searchSortQuery.map((item) => {
          if (item.queryRoute === filterEntries.queryRoute) {
            return filterEntries;
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const query = generateQuery(searchSortQuery);
    dispatch(getAllGamesThunk(query));
  }, [searchSortQuery, dispatch]);

  useEffect(() => {
    dispatch(getUserDetailsThunk(cb));
  }, [dispatch, cb]);

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="ordinar_board_main">
      <OrdinarFilter getTasks={getTasksClosure} />
      <OrdinarBoardTable editModalOpenHandler={editModalOpenHandler} />
      {isEditOpen && (
        <EditModal
          onClose={() => setIsEditOpen(false)}
          editGame={editModalGame}
        />
      )}
    </div>
  );
};

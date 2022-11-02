import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context";
import { generateQueryExpress } from "../../helpers";
import { getAllExpressThunk } from "../../redux/gameSlice";
import { getUserDetailsThunk } from "../../redux/userSlice/user-async";
import { ExpressWrapper } from "../ExpresWrapper";
import { OrdinarFilter } from "../ordinar-board/OrdinarFilter";
import { PreviewComponent } from "../PreviewComponent";
import "./styles.css";

export const ExpressBoard = () => {
  //For Filter
  const [searchSortQueryExpress, setSearchSortQueryExpress] = useState([]);
  const { setBetGames } = useContext(GameContext);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPreview, setIsPreview] = useState(false);

  const cb = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );

  const previewModalOpenHandler = useCallback(
    (game) => {
      if (isPreview) {
        setIsPreview(false);
        setBetGames([]);
      } else {
        setIsPreview(true);

        setBetGames([game]);
      }
    },
    [isPreview, setBetGames]
  );

  const getTasksClosureExpress = (filterEntries) => {
    const newArr = searchSortQueryExpress.filter((item) => {
      return item.queryRoute === filterEntries.queryRoute;
    });
    if (newArr.length === 0) {
      setSearchSortQueryExpress((prev) => {
        return [...prev, filterEntries];
      });
    } else {
      setSearchSortQueryExpress((prev) => {
        return searchSortQueryExpress.map((item) => {
          if (item.queryRoute === filterEntries.queryRoute) {
            return filterEntries;
          }
          return item;
        });
      });
    }
  };

  useEffect(() => {
    const queryExpress = generateQueryExpress(searchSortQueryExpress);
    dispatch(getAllExpressThunk(queryExpress));
  }, [searchSortQueryExpress, dispatch]);

  useEffect(() => {
    dispatch(getUserDetailsThunk(cb));
  }, [dispatch, cb]);

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="express_board_main">
      <OrdinarFilter getTasks={getTasksClosureExpress} />
      <ExpressWrapper previewHandler={previewModalOpenHandler} />
      {isPreview && (
        <PreviewComponent
          onClose={() => {
            setIsPreview(false);
            setBetGames([]);
          }}
        />
      )}
    </div>
  );
};

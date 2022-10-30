import { Button, Switch } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context";
import { getUserDetailsThunk } from "../../redux/userSlice/user-async";
import { LiteBuilder } from "../lite-builder";
import { NewExpressModal } from "../NewExpressModal";
import { ProBuilder } from "../pro-builder";
import "./styles.css";

export const NewExpress = () => {
  const [mode, setMode] = useState(false);
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);
  const { betGames, setBetGames } = useContext(GameContext);

  const editExpressOpenHandler = useCallback(() => {
    setIsExpressModalOpen((prev) => !prev);
  }, [setIsExpressModalOpen]);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const cb = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsThunk(cb));
  }, [dispatch, cb]);

  const isDisable = !!betGames.length;
  const clearExpressHandler = () => {
    setBetGames([]);
  };

  const changeMode = () => setMode((prev) => !prev);

  if (!user) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="new_express_main">
      <div className="new_express_head">
        <Switch
          checkedChildren="Pro"
          unCheckedChildren="Lite"
          onChange={changeMode}
        />
        <Button
          type="danger"
          onClick={editExpressOpenHandler}
          disabled={!isDisable}
        >
          View Cheque
        </Button>
        <Button onClick={clearExpressHandler} type="danger">
          Clear Cheque
        </Button>
      </div>

      {mode ? <ProBuilder /> : <LiteBuilder />}
      {isExpressModalOpen && (
        <NewExpressModal onClose={() => setIsExpressModalOpen(false)} />
      )}
    </div>
  );
};

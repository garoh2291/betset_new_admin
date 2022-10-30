import { Switch } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetailsThunk } from "../../redux/userSlice/user-async";
import { LiteBuilder } from "../lite-builder";
import { ProBuilder } from "../pro-builder";
import "./styles.css";

export const NewOrdinar = () => {
  const [mode, setMode] = useState(false);
  const changeMode = () => setMode((prev) => !prev);
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

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="new_ordinar_main">
      <Switch
        checkedChildren="Pro"
        unCheckedChildren="Lite"
        onChange={changeMode}
        style={{ marginBottom: 10 }}
      />
      {mode ? <ProBuilder /> : <LiteBuilder />}
    </div>
  );
};

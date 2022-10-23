import { Switch } from "antd";
import React, { useState } from "react";
import { LiteBuilder } from "../lite-builder";
import { ProBuilder } from "../pro-builder";
import "./styles.css";

export const NewOrdinar = () => {
  const [mode, setMode] = useState(false);
  const changeMode = () => setMode((prev) => !prev);

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

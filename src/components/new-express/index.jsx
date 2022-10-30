import { Button, Switch } from "antd";
import React, { useCallback, useContext, useState } from "react";
import { GameContext } from "../../context";
import { LiteBuilder } from "../lite-builder";
import { NewExpressModal } from "../NewExpressModal";
import { ProBuilder } from "../pro-builder";
import "./styles.css";

export const NewExpress = () => {
  const [mode, setMode] = useState(false);
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);
  const { betGames } = useContext(GameContext);

  const isDisable = !!betGames.length;

  const editExpressOpenHandler = useCallback(() => {
    setIsExpressModalOpen((prev) => !prev);
  }, [setIsExpressModalOpen]);

  const changeMode = () => setMode((prev) => !prev);
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
      </div>

      {mode ? <ProBuilder /> : <LiteBuilder />}
      {isExpressModalOpen && (
        <NewExpressModal onClose={() => setIsExpressModalOpen(false)} />
      )}
    </div>
  );
};

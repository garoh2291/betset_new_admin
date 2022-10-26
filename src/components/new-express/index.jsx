import { Button, Switch } from "antd";
import React, { useCallback, useState } from "react";
import { LiteBuilder } from "../lite-builder";
import { NewExpressModal } from "../NewExpressModal";
import { ProBuilder } from "../pro-builder";
import "./styles.css";

export const NewExpress = () => {
  const [mode, setMode] = useState(false);
  const [isExpressModalOpen, setIsExpressModalOpen] = useState(false);

  const editModalOpenHandler = useCallback(() => {
    setIsExpressModalOpen((prev) => !prev);
  }, [isExpressModalOpen]);

  const changeMode = () => setMode((prev) => !prev);
  return (
    <div className="new_express_main">
      <div className="new_express_head">
        <Switch
          checkedChildren="Pro"
          unCheckedChildren="Lite"
          onChange={changeMode}
        />
        <Button type="danger" onClick={editModalOpenHandler}>
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

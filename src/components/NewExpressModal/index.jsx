import { Button, Modal, Radio } from "antd";
import React, { useContext, useState } from "react";
import { GameContext } from "../../context";
import mainImg from "../../assets/logo.png";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import "./styles.css";
import { ExpressTable } from "../ExpressTable";
import { BetFooter } from "../BetFooter";

export const NewExpressModal = ({ onClose }) => {
  const { betGames } = useContext(GameContext);
  const [isDemo, setIsDemo] = useState("real");
  const [lang, setLang] = useState("am");

  const onLangChange = (e) => {
    const language = e.target.value;
    setLang(language);
  };

  const onDemoChange = (e) => {
    const mode = e.target.value;
    setIsDemo(mode);
  };

  const downloadHandler = (event) => {
    event.preventDefault();
    domtoimage
      .toBlob(document.getElementById("my-node1"))
      .then(function (blob) {
        saveAs(blob, "myImage.png");
      });
  };

  function logoPos(games) {
    if (games.length > 2) {
      if (games.length === 3) {
        return "23px";
      } else if (games.length === 4) {
        return "46px";
      } else {
        return `${games.length * 11.5}px`;
      }
    }
    return "0px";
  }

  return (
    <Modal
      title="Express "
      open={true}
      //   onOk={onFinish}
      onCancel={onClose}
      width={1000}
      footer={null}
    >
      <div className="modal_header_functions">
        <Radio.Group onChange={onLangChange} defaultValue="am">
          <Radio.Button value="am">Armenia</Radio.Button>
          <Radio.Button value="en">English</Radio.Button>
          <Radio.Button value="ru">Russian</Radio.Button>
        </Radio.Group>
        <Radio.Group onChange={onDemoChange} defaultValue="real">
          <Radio.Button value="real">Real</Radio.Button>
          <Radio.Button value="demo">Demo</Radio.Button>
        </Radio.Group>
        <Button onClick={downloadHandler.bind(this)}>Download</Button>
      </div>
      <div className="betslip_main" id="my-node1">
        <div className="betslip_wrapper" id="my-node">
          <div
            className="betslip_image"
            style={{ top: `calc(40px + ${logoPos(betGames)} )` }}
          >
            {" "}
            <img src={mainImg} alt="some" />
          </div>
          <ExpressTable lang={lang} isDemo={isDemo} />
          <BetFooter lang={lang} />
        </div>
      </div>
    </Modal>
  );
};

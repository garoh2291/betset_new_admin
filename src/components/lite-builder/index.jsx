import React, { useState } from "react";
import { Button, Form, message, Select } from "antd";
import * as moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { SetGameThunk } from "../../redux/gameSlice";
import { OtherFrom } from "../OtherForm";
import { ArmForm } from "../ArmForm";
import { EngForm } from "../EngForm";
import "./styles.css";
import { DescriptionForm } from "../Description";
import { RuForm } from "../RuForm";
import { checkProbability } from "../../helpers";

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 24,
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

export const LiteBuilder = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [sport, setSport] = useState(null);
  const cbSuccess = () => {
    message.success("Game successfully added");
  };

  const cbError = () => {
    message.error("Can't add this Game");
  };

  const changeSport = (e) => {
    setSport(e);
  };

  const onFinish = (values) => {
    const {
      // risk,
      betAm,
      betEn,
      betRu,
      cf,
      leagueAm,
      leagueEn,
      leagueRu,
      probPrc,
      descriptionAm,
      descriptionEn,
      descriptionRu,
      time,
      sport,
      team1Am,
      team1Ru,
      team1En,
      team2Am,
      team2Ru,
      team2En,
    } = values;

    const newDate = moment(values.date).format("YYYY-MM-DD");
    const newTime = moment(time).format("HH:mm:ss");
    const newDate2 = new Date(`${newDate} ${newTime} UTC`);
    const finalDate = newDate2.toISOString();

    const newGame = {
      team1: {
        am: team1Am,
        en: team1En,
        ru: team1Ru,
      },
      team2: {
        am: team2Am,
        en: team2En,
        ru: team2Ru,
      },
      risk: checkProbability(cf, probPrc),
      sport,
      coeff: +cf,
      league: {
        am: leagueAm,
        en: leagueEn,
        ru: leagueRu,
      },
      position: {
        am: betAm,
        en: betEn,
        ru: betRu,
      },
      description: {
        am: descriptionAm,
        en: descriptionEn,
        ru: descriptionRu,
      },
      date: finalDate,
    };

    if (newGame.risk === "wrong") {
      message.error("You can't add this game");
    } else {
      dispatch(SetGameThunk({ newGame, cbSuccess, cbError }));
    }
    form.resetFields();
  };
  return (
    <div className="lite_builder_wrapper">
      <div className="new_game_wrapper">
        <h2>New Game</h2>
        <div className="new_game_form_wrapper">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <OtherFrom changeSport={changeSport} />

            <ArmForm sport={sport} />
            <EngForm sport={sport} />
            <RuForm sport={sport} />
            <DescriptionForm />
            <Form.Item {...tailLayout}>
              <Button type="danger" htmlType="submit">
                Add Game
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

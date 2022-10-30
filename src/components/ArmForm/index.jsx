import { Form, Input } from "antd";
import React from "react";
import { LeagueAm } from "../../helpers/league";
import { PositionAm } from "../../helpers/position";
import { Team1Am, Team2Am } from "../../helpers/teams";

export const ArmForm = ({ sport }) => {
  // const [league, setLeague] = useState("");
  // const changeHandle = (e) => {
  //   setLeague(e);
  // };

  return (
    <Form.Item>
      <Input.Group compact>
        <LeagueAm sport={sport} />
        <Team1Am sport={sport} />
        <Team2Am sport={sport} />
        <PositionAm sport={sport} />
      </Input.Group>
    </Form.Item>
  );
};

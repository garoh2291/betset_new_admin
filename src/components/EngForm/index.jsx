import React from "react";
import { Form, Input } from "antd";
import { Team1En, Team2En } from "../../helpers/teams";
import { LeagueEn } from "../../helpers/league";
import { PositionEn } from "../../helpers/position";

export const EngForm = ({ sport }) => {
  return (
    <Form.Item>
      <Input.Group compact>
        <LeagueEn sport={sport} />
        <Team1En sport={sport} />
        <Team2En sport={sport} />
        <PositionEn sport={sport} />
      </Input.Group>
    </Form.Item>
  );
};

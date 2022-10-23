import React from "react";
import { Form, Input } from "antd";
import { Team1Ru, Team2Ru } from "../../helpers/teams";
import { LeagueRu } from "../../helpers/league";
import { PositionRu } from "../../helpers/position";

export const RuForm = ({ sport }) => {
  return (
    <Form.Item>
      <Input.Group compact>
        <LeagueRu sport={sport} />
        <Team1Ru sport={sport} />
        <Team2Ru sport={sport} />
        <PositionRu sport={sport} />
      </Input.Group>
    </Form.Item>
  );
};

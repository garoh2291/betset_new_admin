import { Form, Input, Select } from "antd";
import { useState } from "react";
import {
  BASKETBALL_LEAGUES,
  FOOTBALL_LEAGUES,
  HOCKEY_LEAGUES,
  TENNIS_LEAGUES,
  VOLLEYBALL_LEAGUES,
} from "../teamsDb/leagues";
const { Option } = Select;

function chooseLeague(sport) {
  if (sport) {
    switch (sport) {
      case "football":
        return FOOTBALL_LEAGUES;
      case "tennis":
        return TENNIS_LEAGUES;
      case "basketball":
        return BASKETBALL_LEAGUES;
      case "volleyball":
        return VOLLEYBALL_LEAGUES;
      case "hockey":
        return HOCKEY_LEAGUES;
      default:
        return [];
    }
  }
  return [];
}

export function LeagueAm({ sport }) {
  const [league, setLeague] = useState("");

  const changeHandle = (e) => {
    setLeague(e);
  };

  return (
    <Form.Item name={"leagueAm"} noStyle rules={[{ required: true }]}>
      {league === "Այլ" ? (
        <Input placeholder="Լիգա" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Լիգա"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseLeague(sport).map((league) => (
            <Option key={league.am} value={league.am}>
              {league.am}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function LeagueEn({ sport }) {
  const [league, setLeague] = useState("");

  const changeHandle = (e) => {
    setLeague(e);
  };

  return (
    <Form.Item name={"leagueEn"} noStyle rules={[{ required: true }]}>
      {league === "Other" ? (
        <Input placeholder="League" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="League"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseLeague(sport).map((league) => (
            <Option key={league.en} value={league.en}>
              {league.en}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function LeagueRu({ sport }) {
  const [league, setLeague] = useState("");

  const changeHandle = (e) => {
    setLeague(e);
  };

  return (
    <Form.Item name={"leagueRu"} noStyle rules={[{ required: true }]}>
      <Input placeholder="лига" style={{ width: "25%" }} />
    </Form.Item>
  );
}

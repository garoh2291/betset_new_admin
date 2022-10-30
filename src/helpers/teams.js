import { Form, Input, Select } from "antd";
import { useState } from "react";
import {
  BASKETBALL_TEAMS,
  FOOTBALL_TEAMS,
  HOCKEY_TEAMS,
  TENNIS_TEAMS,
  VOLLEYBALL_TEAMS,
} from "../teamsDb";
const { Option } = Select;

function chooseSport(sport) {
  if (sport) {
    switch (sport) {
      case "tennis":
        return TENNIS_TEAMS;
      case "football":
        return FOOTBALL_TEAMS;
      case "basketball":
        return BASKETBALL_TEAMS;
      case "volleyball":
        return VOLLEYBALL_TEAMS;
      case "hockey":
        return HOCKEY_TEAMS;
      default:
        return [];
    }
  }
  return [];
}

export function Team1Am({ sport }) {
  const [team, setTeam] = useState("");

  const changeHandle = (e) => {
    setTeam(e);
  };

  return (
    <Form.Item name={"team1Am"} noStyle rules={[{ required: true }]}>
      {team === "Այլ" ? (
        <Input placeholder="Թիմ 1" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Թիմ 1"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseSport(sport).map((team) => (
            <Option key={team.am} value={team.am}>
              {team.am}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function Team2Am({ sport }) {
  const [team, setTeam] = useState("");
  const changeHandle = (e) => {
    setTeam(e);
  };

  return (
    <Form.Item name={"team2Am"} noStyle rules={[{ required: true }]}>
      {team === "Այլ" ? (
        <Input placeholder="Թիմ 2" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Թիմ 2"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseSport(sport).map((team) => (
            <Option key={team.am} value={team.am}>
              {team.am}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function Team1En({ sport }) {
  const [team, setTeam] = useState("");
  const changeHandle = (e) => {
    setTeam(e);
  };

  return (
    <Form.Item name={"team1En"} noStyle rules={[{ required: true }]}>
      {team === "Other" ? (
        <Input placeholder="Team 1" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Team 1"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseSport(sport).map((team) => (
            <Option key={team.en} value={team.en}>
              {team.en}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function Team2En({ sport }) {
  const [team, setTeam] = useState("");
  const changeHandle = (e) => {
    setTeam(e);
  };
  return (
    <Form.Item name={"team2En"} noStyle rules={[{ required: true }]}>
      {team === "Other" ? (
        <Input placeholder="Team 1" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Team 2"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {chooseSport(sport).map((team) => (
            <Option key={team.en} value={team.en}>
              {team.en}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function Team1Ru({ sport }) {
  // const [team, setTeam] = useState("");
  // const changeHandle = (e) => {
  //   setTeam(e);
  // };
  return (
    <Form.Item name={"team1Ru"} noStyle rules={[{ required: true }]}>
      <Input placeholder="команда 1" style={{ width: "25%" }} />
    </Form.Item>
  );
}

export function Team2Ru({ sport }) {
  // const [team, setTeam] = useState("");
  // const changeHandle = (e) => {
  //   setTeam(e);
  // };
  return (
    <Form.Item name={"team2Ru"} noStyle rules={[{ required: true }]}>
      <Input placeholder="команда 2" style={{ width: "25%" }} />
    </Form.Item>
  );
}

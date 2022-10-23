import { Form, Input, Select } from "antd";
import { useState } from "react";
import {
  BASKETBALL_POSITIONS,
  FOOTBALL_POSITIONS,
  HOCKEY_POSITIONS,
  TENNIS_POSITIONS,
  VOLLEYBALL_POSITIONS,
} from "../teamsDb/positions";
const { Option } = Select;

function choosPosition(sport) {
  if (sport) {
    switch (sport) {
      case "football":
        return FOOTBALL_POSITIONS;
      case "tennis":
        return TENNIS_POSITIONS;
      case "basketball":
        return BASKETBALL_POSITIONS;
      case "volleyball":
        return VOLLEYBALL_POSITIONS;
      case "hockey":
        return HOCKEY_POSITIONS;
      default:
        return [];
    }
  }
  return [];
}

export function PositionAm({ sport }) {
  const [position, setPosition] = useState("");

  const changeHandle = (e) => {
    setPosition(e);
  };

  return (
    <Form.Item name={"betAm"} noStyle rules={[{ required: true }]}>
      {position === "Այլ" ? (
        <Input placeholder="Դիրք" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Դիրք"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {choosPosition(sport).map((position) => (
            <Option key={position.am} value={position.am}>
              {position.am}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function PositionEn({ sport }) {
  const [position, setPosition] = useState("");

  const changeHandle = (e) => {
    setPosition(e);
  };

  return (
    <Form.Item name={"betEn"} noStyle rules={[{ required: true }]}>
      {position === "Other" ? (
        <Input placeholder="Position" style={{ width: "25%" }} />
      ) : (
        <Select
          placeholder="Position"
          style={{ width: "25%" }}
          showSearch
          onSelect={changeHandle}
        >
          {choosPosition(sport).map((position) => (
            <Option key={position.en} value={position.en}>
              {position.en}
            </Option>
          ))}
        </Select>
      )}
    </Form.Item>
  );
}

export function PositionRu({ sport }) {
  const [position, setPosition] = useState("");

  const changeHandle = (e) => {
    setPosition(e);
  };

  return (
    <Form.Item name={"betRu"} noStyle rules={[{ required: true }]}>
      <Input placeholder="позиция" style={{ width: "25%" }} />
    </Form.Item>
  );
}

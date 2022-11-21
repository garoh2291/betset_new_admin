import React from "react";
import { Checkbox, DatePicker, Form, Input, Select, TimePicker } from "antd";

const format = "HH:mm";

const { Option } = Select;

export const OtherFrom = ({ changeSport, onMatchDayChange, type }) => {
  return (
    <Form.Item>
      <Input.Group compact>
        <Form.Item name={"date"} noStyle rules={[{ required: true }]}>
          <DatePicker
            format="DD MM YYYY"
            style={{ width: type === "ordinar" ? "15%" : "20%" }}
            inputReadOnly={true}
          />
        </Form.Item>

        <Form.Item name={"time"} noStyle rules={[{ required: true }]}>
          <TimePicker
            format={format}
            style={{ width: "20%" }}
            inputReadOnly={true}
          />
        </Form.Item>
        <Form.Item name={"sport"} noStyle rules={[{ required: true }]}>
          <Select
            showSearch
            placeholder="Select Sport"
            style={{ width: type === "ordinar" ? "20%" : "25%" }}
            onSelect={changeSport}
          >
            <Option value="football">Football</Option>
            <Option value="volleyball">Volleyball</Option>
            <Option value="basketball">BasketBall</Option>
            <Option value="regby">Regby</Option>
            <Option value="tennis">Tennis</Option>
            <Option value="tableTennis">Table Tennis</Option>
            <Option value="ice hockey">Ice Hockey</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={"cf"}
          noStyle
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/),
            },
          ]}
        >
          <Input placeholder="CF" style={{ width: "15%" }} />
        </Form.Item>

        <Form.Item
          name={"probPrc"}
          noStyle
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/),
            },
          ]}
        >
          <Input
            placeholder="Probability %"
            style={{ width: type === "ordinar" ? "15%" : "20%" }}
          />
        </Form.Item>
        {type === "ordinar" ? (
          <Form.Item
            name={"matchDay"}
            style={{ width: "12%", marginLeft: "3%" }}
          >
            <Checkbox onChange={onMatchDayChange}>Match of Day</Checkbox>
          </Form.Item>
        ) : (
          ""
        )}
      </Input.Group>
    </Form.Item>
  );
};

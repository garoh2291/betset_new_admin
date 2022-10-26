import React from "react";
import { DatePicker, Form, Input, Select, TimePicker } from "antd";

const format = "HH:mm";

const { Option } = Select;

export const OtherFrom = ({ changeSport }) => {
  return (
    <Form.Item>
      <Input.Group compact>
        <Form.Item name={"date"} noStyle rules={[{ required: true }]}>
          <DatePicker
            format="DD MM YYYY"
            style={{ width: "20%" }}
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
            style={{ width: "25%" }}
            onSelect={changeSport}
          >
            <Option value="football">Football</Option>
            <Option value="volleyball">Volleyball</Option>
            <Option value="basketball">BasketBall</Option>
            <Option value="regby">Regby</Option>
            <Option value="tennis">Tennis</Option>
            <Option value="tableTennis">Table Tennis</Option>
            <Option value="hockey">Hockey</Option>
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
          <Input placeholder="Probability %" style={{ width: "20%" }} />
        </Form.Item>
      </Input.Group>
    </Form.Item>
  );
};

import React from "react";
import "./styles.css";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

export const ProBuilderForm = ({
  changeSport,
  sport,
  changeHandleCountry,
  country,
  changeHandleLeagues,
  leagues,
}) => {
  const [form] = Form.useForm();

  return (
    <div className="pro_game_for_wrapper">
      <div className="add_pro_game">
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item>
            <Input.Group compact>
              <Select
                placeholder="Սպորտ"
                style={{ width: "25%" }}
                showSearch
                onSelect={changeSport}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {sport.map((sport) => (
                  <Option key={sport.Id} value={sport.Id}>
                    {sport.N}
                  </Option>
                ))}
              </Select>

              <Select
                placeholder="Երկիր"
                style={{ width: "25%" }}
                showSearch
                onSelect={changeHandleCountry}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().includes(input.toLowerCase())
                // }
              >
                {country.map((country) => (
                  <Option key={country.Id} value={country.Id}>
                    {country.N}
                  </Option>
                ))}
              </Select>

              <Select
                placeholder="Լիգա"
                style={{ width: "25%" }}
                showSearch
                onSelect={changeHandleLeagues}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {leagues.map((league) => (
                  <Option key={league.Id} value={league.Id}>
                    {league.N}
                  </Option>
                ))}
              </Select>
            </Input.Group>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

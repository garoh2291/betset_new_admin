import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import moment from "moment";
import "./styles.css";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};

export const SportTypeFilter = ({ getTasks }) => {
  const [form] = Form.useForm();

  const chageSportFilter = (value) => {
    getTasks({
      queryRoute: "sport",
      queryValue: value,
    });
  };

  const changeStartDate = (value) => {
    const time = moment(value).format("YYYY-MM-DD");
    if (!value) {
      getTasks({
        queryRoute: "complete_gte",
        queryValue: "",
      });
    } else {
      getTasks({
        queryRoute: "complete_gte",
        queryValue: time,
      });
    }
  };

  const changeStartDateTill = (value) => {
    const time = moment(value).format("YYYY-MM-DD");
    if (!value) {
      getTasks({
        queryRoute: "complete_lte",
        queryValue: "",
      });
    } else {
      getTasks({
        queryRoute: "complete_lte",
        queryValue: time,
      });
    }
  };

  return (
    <div className="sport_filter_wrapper">
      <Form {...layout} form={form} name="control-hooks">
        <Form.Item>
          <Input.Group compact>
            <Form.Item noStyle>
              <Select
                showSearch
                placeholder="Select Sport"
                style={{ width: "25%" }}
                onSelect={chageSportFilter}
              >
                <Option value="">All</Option>
                <Option value="football">Football</Option>
                <Option value="volleyball">Volleyball</Option>
                <Option value="basketball">BasketBall</Option>
                <Option value="regby">Regby</Option>
                <Option value="tennis">Tennis</Option>
                <Option value="tableTennis">Table Tennis</Option>
                <Option value="hockey">Hockey</Option>
              </Select>
            </Form.Item>
            <Form.Item noStyle>
              <span className="label_start_from">Start From:</span>
              <DatePicker
                format="DD MM YYYY"
                style={{ width: "25%" }}
                inputReadOnly={true}
                onChange={changeStartDate}
              />
            </Form.Item>
            <Form.Item noStyle>
              <span className="label_start_from">Start until:</span>
              <DatePicker
                format="DD MM YYYY"
                style={{ width: "25%" }}
                inputReadOnly={true}
                onChange={changeStartDateTill}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

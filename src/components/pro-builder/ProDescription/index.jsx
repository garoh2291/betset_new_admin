import { Button, Checkbox, Form, Input } from "antd";
import { useContext, useState } from "react";
import { GameContext } from "../../../context";

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 24,
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
export const ProDescritptionAndProbability = ({
  positionDetails,
  onSubEvent,
  changeChecked,
  type,
}) => {
  const [matchDay, setMatchDay] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const additionalDetails = {
      positionAm: positionDetails.positionAm,
      positionEn: positionDetails.positionEn,
      positionRu: positionDetails.positionRu,
      descriptionAm: values.descriptionAm,
      descriptionEn: values.descriptionEn,
      descriptionRu: values.descriptionRu,
      probPrc: values.probPrc,
      coef: positionDetails.coef,
      matchDay: matchDay,
    };
    onSubEvent(additionalDetails);
    form.resetFields();
    changeChecked();
  };

  const bldux = (e) => {
    setMatchDay(e.target.checked);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        {type === "ordinar" ? (
          <Form.Item>
            <Input.Group compact>
              <Form.Item
                name={"descriptionAm"}
                noStyle
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Description Armenian"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        ) : (
          ""
        )}
        {type === "ordinar" ? (
          <Form.Item>
            <Input.Group compact>
              <Form.Item
                name={"descriptionEn"}
                noStyle
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Description English"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        ) : (
          ""
        )}
        {type === "ordinar" ? (
          <Form.Item>
            <Input.Group compact>
              <Form.Item name={"descriptionRu"} noStyle>
                <Input
                  placeholder="Description Russian Optional"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        ) : (
          ""
        )}
        <Form.Item>
          <Input.Group compact>
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
        {type === "ordinar" ? (
          <Form.Item
            name={"matchDay"}
            style={{ width: "12%", marginLeft: "3%" }}
          >
            <Checkbox onChange={bldux}>Match of Day</Checkbox>
          </Form.Item>
        ) : (
          ""
        )}
        <Form.Item {...tailLayout}>
          <Button type="danger" htmlType="submit">
            Add Game
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

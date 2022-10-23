import React from "react";
import { Form, Input } from "antd";

export const DescriptionForm = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

import { Button, Collapse, Popover } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const { Panel } = Collapse;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Some = ({ status }) => {
  console.log(status);

  return (
    <div style={{ height: "20px" }}>
      {status === "pending" ? (
        <Popover
          content={content}
          title="Change Status"
          placement="left"
          trigger="hover"
        >
          <Button
            style={{
              height: "20px",
              fontSize: "12px",
              lineHeight: 0,
              color: "black!important",
            }}
            className="status_change_button"
          >
            Change
          </Button>
        </Popover>
      ) : (
        ""
      )}
      <span style={{ marginLeft: 5 }}>{status}</span>
      {/* <p>status</p> */}
    </div>
  );
};

export const ExpressWrapper = ({ previewHandler }) => {
  const { express } = useSelector((state) => state.games);

  if (!express) {
    return (
      <div className="no_express_wrapper">
        <h2>No Express</h2>
      </div>
    );
  }
  return (
    <div className="express_body_wrapper">
      <Collapse defaultActiveKey={["1"]}>
        {express.map((item, index) => (
          <Panel
            header={`Cheque N: ${item._id}`}
            key={index}
            extra={<Some status={item.status} />}
            style={{ backgroundColor: "#DDDDFF", marginTop: 10 }}
            className={"cheque_wrapper"}
          >
            <p>heldsdl</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

import { Button, Collapse, Popover } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ExpresGame } from "./ExpressGames";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { statusColor } from "../../helpers/smallFunctions";
import * as moment from "moment";

import "./styles.css";
import { Content } from "./StatusChangeComponent";

const { Panel } = Collapse;

const Some = ({ status, cheque, previewHandler, _id }) => {
  return (
    <div style={{ height: "20px" }}>
      {status === "pending" ? (
        <Popover
          content={<Content _id={_id} />}
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
      <span
        style={{ marginLeft: 5, marginRight: 10, color: statusColor(status) }}
      >
        {status}
      </span>
      <button className="view_button_rev">
        <RemoveRedEyeIcon
          style={{ height: 20, width: 20 }}
          onClick={() => previewHandler(cheque)}
        />
      </button>
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
      <Collapse collapsible="header">
        {express.map((item, index) => (
          <Panel
            header={`${moment(item.date).utc().format("DD-MMM-YYYY")}: ${
              item.games[0].team1.en
            } - ${item.games[0].team2.en}: ${item.totalCoeff.toFixed(3)}`}
            key={index}
            extra={
              <Some
                status={item.status}
                cheque={item.games}
                previewHandler={previewHandler}
                _id={item._id}
              />
            }
            style={{ backgroundColor: "#DDDDFF", marginTop: 10 }}
            className={"cheque_wrapper"}
          >
            {item.games.map((game) => (
              <ExpresGame key={game.id} game={game} />
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

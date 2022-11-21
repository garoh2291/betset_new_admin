import { message } from "antd";

export const cbSuccess = () => {
  message.success("Game successfully added");
};

export const cbError = () => {
  message.error("Can't add this Game");
};

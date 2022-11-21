import { Select } from "antd";
import { useDispatch } from "react-redux";
import { changeExpressStatusThunk } from "../../../redux/gameSlice";
import { cbSuccess, cbError } from "../../../helpers/callback";
const { Option } = Select;

export const Content = ({ _id }) => {
  const dispatch = useDispatch();
  const changeStatusHandleBack = (value) => {
    const changedData = { status: value };
    dispatch(
      changeExpressStatusThunk({ changedData, _id, cbSuccess, cbError })
    );
  };
  return (
    <div>
      <Select
        placeholder="Select Status"
        style={{ width: "100%" }}
        onSelect={changeStatusHandleBack}
      >
        <Option value="win">Win</Option>
        <Option value="loose">Loose</Option>
        <Option value="returned">Returned</Option>
      </Select>
    </div>
  );
};

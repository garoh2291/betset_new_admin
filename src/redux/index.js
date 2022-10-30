import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    games: gameSlice,
    user: userSlice,
  },
});

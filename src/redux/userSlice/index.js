import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../helpers/token";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      surname: null,
      loggedId: null,
      token: getToken(),
    },
    error: null,
    status: null,
  },
  reducers: {
    setUser(state, action) {
      state.user.surname = action.payload.data.surname;
      state.user.name = action.payload.data.name;
      state.user.loggedId = action.payload.data._id;
    },
    removeUser(state, action) {
      state.user.surname = null;
      state.user.name = null;
      state.user._id = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

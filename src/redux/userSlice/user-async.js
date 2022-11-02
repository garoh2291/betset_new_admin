import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { removeUser, setUser } from ".";
import { BACKEND_URL } from "../../data";

import { getToken } from "../../helpers/token";

export const loginUserThunk = createAsyncThunk(
  "user/loginUserThunk",
  function ({ formData, cb }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status || data.error) {
          throw new Error(data.message);
        }
        const { jwt, refreshToken } = data;
        localStorage.setItem("token", JSON.stringify(jwt));
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
        cb();
      })
      .catch((err) => {
        message.error("Incorect Login or Password");
        rejectWithValue(err);
      });
  }
);

export const getUserDetailsThunk = createAsyncThunk(
  "user/getUserDetailsThunk",
  function (cb, { dispatch }) {
    fetch(`${BACKEND_URL}/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error || data.errors) {
          cb();
          dispatch(removeUser());
          throw new Error(data.error);
        }

        dispatch(setUser({ data }));
      })
      .catch((err) => console.log(err));
  }
);

export const LogOutThunk = createAsyncThunk(
  "project/LogOutThunk",
  function (cb, { dispatch }) {
    fetch(`${BACKEND_URL}/user/sign-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwt: getToken(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(removeUser());
          cb();
        }
      });
  }
);

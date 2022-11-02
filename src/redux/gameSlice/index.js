import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGamesRequest, getGamesRequestExpress } from "../../api";
import { BACKEND_URL } from "../../data";

export const getAllGamesThunk = createAsyncThunk(
  "games/getAllGamesThunk",
  function (query, { dispatch, rejectWithValue }) {
    getGamesRequest(query)
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        dispatch(setGames({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const getAllExpressThunk = createAsyncThunk(
  "games/getAllGamesThunk",
  function (queryExpress, { dispatch, rejectWithValue }) {
    getGamesRequestExpress(queryExpress)
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        dispatch(setExpress({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const SetGameThunk = createAsyncThunk(
  "games/setGameThunk",
  function ({ newGame, cbSuccess, cbError }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/game`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newGame),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      })
      .then((data) => {
        cbSuccess();
        dispatch(addGame({ data }));
      })
      .catch((err) => cbError);
  }
);

export const SetExpressThunk = createAsyncThunk(
  "games/setGameThunk",
  function ({ newExpress, cbSuccess, cbError }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/express`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newExpress),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server Error!");
        }
        return res.json();
      })
      .then((data) => {
        cbSuccess();
        dispatch(addExpress({ data }));
      })
      .catch((err) => cbError);
  }
);

export const DeleteGameThunk = createAsyncThunk(
  "games/deleteGameThink",
  function (_id, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/game/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cant delete");
        }
        dispatch(deleteGame({ _id }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const editGameThunk = createAsyncThunk(
  "tasks/editGameThunk",
  function ({ editFormData, onClose, _id }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/game/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        dispatch(editGame({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
    onClose();
  }
);

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: null,
    express: null,
  },
  reducers: {
    setGames(state, action) {
      const gamesFromBackend = action.payload.data;
      return {
        ...state,
        games: gamesFromBackend,
      };
    },
    addGame(state, action) {
      const newGame = action.payload.data;
      const games = [...state.games, newGame];

      return {
        ...state,
        games,
      };
    },
    deleteGame(state, action) {
      const DeletedGameId = action.payload._id;
      const games = state.games.filter((game) => game._id !== DeletedGameId);
      return {
        ...state,
        games,
      };
    },
    editGame(state, action) {
      const editedGame = action.payload.data;
      const games = state.games.map((game) => {
        if (game._id === editedGame._id) {
          return editedGame;
        }
        return game;
      });

      return {
        ...state,
        games,
      };
    },
    setExpress(state, action) {
      const ExpressesFromBackend = action.payload.data;
      return {
        ...state,
        express: ExpressesFromBackend,
      };
    },
    addExpress(state, action) {
      const newExpress = action.payload.data;
      const express = [...state.games, newExpress];

      return {
        ...state,
        express,
      };
    },
  },
});

const { setGames, addGame, deleteGame, editGame, setExpress, addExpress } =
  gameSlice.actions;

export default gameSlice.reducer;

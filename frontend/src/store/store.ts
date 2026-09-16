import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import queueReducer from "./slices/queueSlice";
import playerReducer from "./slices/playerSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      room: roomReducer,
      queue: queueReducer,
      player: playerReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./reducers";

const store = configureStore({
  reducer: mealReducer,
});

export default store;

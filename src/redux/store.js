import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import aiReducer from "./features/aiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ai: aiReducer,
  },
});

export default store;

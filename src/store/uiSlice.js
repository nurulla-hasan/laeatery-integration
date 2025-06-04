import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasChatted: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHasChatted: (state, action) => {
      state.hasChatted = action.payload;
    },
  },
});

export const { setHasChatted } = uiSlice.actions;
export default uiSlice.reducer;

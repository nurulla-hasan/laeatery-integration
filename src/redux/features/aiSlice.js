import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChatted: false,
};

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    setChattedTrue: (state) => {
      state.isChatted = true;
    },
  },
});

export const { setChattedTrue } = aiSlice.actions;
export default aiSlice.reducer;

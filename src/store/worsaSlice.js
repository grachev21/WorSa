import { createSlice } from "@reduxjs/toolkit";

const worsaSlice = createSlice({
  name: "worsa",
  initialState: {
    indexButton: 1,
    textSize: ["md", "lg", "xl"]
  },
  reducers: {
    textSize: (state, action) => {
      state.indexButton = action.payload;
    }
  }
});

export const { textSize } = worsaSlice.actions;

export default worsaSlice.reducer;

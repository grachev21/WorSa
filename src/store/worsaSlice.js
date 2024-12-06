import { createSlice } from "@reduxjs/toolkit";

const worsaSlice = createSlice({
  name: "worsa",
  initialState: {
    textSize: { indexButton: 1, size: ["md", "lg", "xl"] },
    errorInput: false,
  },
  reducers: {
    textSize: (state, action) => {
      state.textSize.indexButton = action.payload;
    },
    errorInput: (state, action) => {
      state.errorInput = action.payload;
    }
  }
});

export const { textSize, errorInput} = worsaSlice.actions;

export default worsaSlice.reducer;

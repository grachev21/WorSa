import { createSlice } from "@reduxjs/toolkit";

const worsaSlice = createSlice({
  name: "worsa",
  initialState: {
    textSize: { indexButton: 1, size: ["md", "lg", "xl"] },
    errorInput: false,
    inputTest: { windowCondition: false },
    navPanelActivate: false,
    sidePanel: false,
  },
  reducers: {
    textSize: (state, action) => {
      state.textSize.indexButton = action.payload;
    },
    errorInput: (state, action) => {
      state.errorInput = action.payload;
    },
    inputTest: (state, action) => {
      state.inputTest = action.payload;
    },
    navPanelActivate: (state, action) => {
      state.navPanelActivate = action.payload;
    },
    showCardInPanel: (state, action) => {
      state.showCardInPanel = action.payload;
    },
  },
});

export const {
  textSize,
  errorInput,
  inputTest,
  navPanelActivate,
  showCardInPanel,
} = worsaSlice.actions;

export default worsaSlice.reducer;

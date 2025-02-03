import { createSlice } from "@reduxjs/toolkit";

const worsaSlice = createSlice({
  name: "worsa",
  initialState: {
    textSize: { indexButton: 1, size: ["md", "lg", "xl"] },
    errorInput: false,
    inputTest: { windowCondition: false },
    navPanelActivate: false,
    sidePanel: false,
    modalWindowSettings: false,
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
    modalWindowSettings: (state, action) => {
      // console.log(action);
      state.modalWindowSettings = action.payload;
    },
  },
});

export const { textSize, errorInput, inputTest, navPanelActivate, showCardInPanel, modalWindowSettings } = worsaSlice.actions;

export default worsaSlice.reducer;

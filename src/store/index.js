import {configureStore} from "@reduxjs/toolkit";
import worsaReducer from "./worsaSlice";

export default configureStore({
  reducer: {
    worsa: worsaReducer,
  },
});

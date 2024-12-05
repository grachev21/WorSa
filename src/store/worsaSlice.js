// import { createSlice } from "@reduxjs/toolkit";

// const worsaSlice = createSlice({
//   name: "worsa",
//   initialStateru: {
//     worsa: [],
//   },
//   reducers: {
//     changeSize(state, action) {
//       state.worsa.push({
//         text: action.payload.text,
//         completed: null,
//       });
//     },
//     colorButton(state, action) {},
//   },
// });

// export const { changeSize, colorButton } = worsaSlice.actions;

// export default worsaSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const worsaSlice = createSlice({
    name: 'worsa',
    initialState: {
        worsa: [],
    },
    reducers: {
        textSize(state, action) {
            state.todos.push({
              // id: new Date().toISOString(),
              text: action.payload.text,
              completed: false,
              x: "asdfasdf"
            });
        },
    },
});

export const {textSize} = worsaSlice.actions;

export default worsaSlice.reducer;
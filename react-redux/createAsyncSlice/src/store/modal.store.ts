import { createSlice } from "@reduxjs/toolkit";


const modal = createSlice({
  name: "modal",
  initialState: {
    modal: true
  }, reducers: {
    open(state) {
      state.modal = true
    },
    close(state) {
      state.modal = false
    }
  }
});

export const { open, close } = modal.actions;
export default modal.reducer
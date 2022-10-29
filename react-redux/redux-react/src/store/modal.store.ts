import { createSlice } from "@reduxjs/toolkit";


const modal = createSlice({
  name: "modal",
  initialState: {
    modal: true
  }, reducers: {
    open(state) {
      return { modal: !state.modal }
    },
    close(state) {
      return { modal: !state.modal }
    }
  }
});

export const { open, close } = modal.actions;
export default modal.reducer
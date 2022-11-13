import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state) {
      return { counter: state.counter + 1 }
    },
    decrement(state) {
      return { counter: state.counter - 1 }
    }
  }
});

export const { increment, decrement } = stock.actions
export default stock.reducer


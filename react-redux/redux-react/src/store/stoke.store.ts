import { createSlice, ThunkDispatch } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./configureStore";

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    }
  }
});

export const { increment, decrement } = stock.actions
export default stock.reducer

// function sleep(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// export function asyncIncrement(): AppThunk {
//   return async function (dispatch): Promise<void> {
//     await sleep(3000);
//     dispatch(increment())
//   }
// }
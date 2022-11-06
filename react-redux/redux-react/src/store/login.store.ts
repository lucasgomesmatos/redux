import { createSlice } from "@reduxjs/toolkit";
import { api } from "../service/api";


const initialState = {
  data: null,
  error: null,
  loading: false
}

const login = createSlice({
  name: "login",
  initialState: { ...initialState },
  reducers: {
    fetchStarted(state) {
      state.loading = true
    },
    fetchSuccess(state, action) {
      state.loading = false,
        state.data = action.payload,
        state.error = null
    },
    fetchError(state, action) {
      state.loading = false,
        state.data = null,
        state.error = action.payload
    }
  }
});

export const { fetchStarted, fetchSuccess, fetchError } = login.actions
export default login.reducer

const fetchToken = (user: any) => async (dispatch: any) => {
  try {
    dispatch(fetchStarted());
    const data = api.post("token", )
  } catch (e) {

  }
}
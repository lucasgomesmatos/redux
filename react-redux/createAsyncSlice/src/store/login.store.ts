import { createSlice } from "@reduxjs/toolkit";
import { api } from "../service/api";
import { AppDispatch } from "./configureStore";


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


interface UserProps {
  username: string;
  password: string;
}

export const fetchToken = (user: UserProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = await response.json();
    return dispatch(fetchSuccess(data))

  } catch (e) {
    return dispatch(fetchError(e.message))
  }
}
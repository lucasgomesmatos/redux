import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import stockReducer from "./stoke.store"
import modalReducer from "./modal.store"
import loginReducer from "./login.store"


const store = configureStore({
  reducer: {
    stock: stockReducer,
    modal: modalReducer,
    login: loginReducer
  },

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;


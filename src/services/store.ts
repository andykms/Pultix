import { filmSlice } from "../features/Film/FilmSlice";
import { favoritesSlice } from "../features/Favorites/FavoritesSlice";
import { combineSlices } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector as selectorHook, type TypedUseSelectorHook } from "react-redux";
import { useDispatch as dispatchHook } from "react-redux";

const rootReducer =combineSlices(filmSlice, favoritesSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState =  ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch:  () => AppDispatch = ()=> dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

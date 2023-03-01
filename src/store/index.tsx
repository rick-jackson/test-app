import { combineReducers, configureStore } from "@reduxjs/toolkit";

import usersReducer from "@store/reducers/users";
import postsReducer from "@store/reducers/posts";
import albumsReducer from "@store/reducers/albums";

const rootReducer = combineReducers({
  usersReducer,
  postsReducer,
  albumsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

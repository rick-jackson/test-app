import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type Album from "@entities/album";

type AlbumsState = {
  albums: Album[];
  isLoading: boolean;
  error: string;
};

const initialState: AlbumsState = {
  albums: [],
  isLoading: false,
  error: "",
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    albumsFetching(state) {
      state.isLoading = true;
    },
    albumsFetchingSuccess(state, action: PayloadAction<Album[]>) {
      state.isLoading = false;
      state.error = "";
      state.albums = action.payload;
    },
    albumsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default albumsSlice.reducer;

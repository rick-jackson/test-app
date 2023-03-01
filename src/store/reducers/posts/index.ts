import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type Post from "@entities/post";

type PostsState = {
  posts: Post[];
  isLoading: boolean;
  error: string;
};

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<Post[]>) {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;

import axios from "axios";

import type Post from "@entities/post";
import { AppDispatch } from "@store/index";
import { postsSlice } from "@store/reducers/posts";

const getPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await axios.get<Post[]>(
      `${process.env.REACT_APP_URL}/posts`,
    );
    dispatch(postsSlice.actions.postsFetchingSuccess(response.data));
  } catch (e) {
    const error = e as Error;
    dispatch(postsSlice.actions.postsFetchingError(error.message));
  }
};

export default getPosts;

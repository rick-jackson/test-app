import axios from "axios";

import type Post from "@entities/post";
import { postsSlice } from "@store/reducers/posts";
import { AppDispatch } from "@store/index";
import { BASE_URL } from "@common/baseUrl";

const getPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    dispatch(postsSlice.actions.postsFetchingSuccess(response.data));
  } catch (e) {
    const error = e as Error;
    dispatch(postsSlice.actions.postsFetchingError(error.message));
  }
};

export default getPosts;

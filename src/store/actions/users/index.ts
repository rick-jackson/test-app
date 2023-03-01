import axios from "axios";

import type User from "@entities/user";
import { userSlice } from "@store/reducers/users";
import { AppDispatch } from "@store/index";
import { BASE_URL } from "@common/baseUrl";

const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e) {
    const error = e as Error;
    dispatch(userSlice.actions.usersFetchingError(error.message));
  }
};

export default getUsers;

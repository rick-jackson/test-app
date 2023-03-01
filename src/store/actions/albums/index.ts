import axios from "axios";

import type Album from "@entities/album";
import { albumsSlice } from "@store/reducers/albums";
import { AppDispatch } from "@store/index";
import { BASE_URL } from "@common/baseUrl";

const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(albumsSlice.actions.albumsFetching());
    const response = await axios.get<Album[]>(`${BASE_URL}/albums`);
    dispatch(albumsSlice.actions.albumsFetchingSuccess(response.data));
  } catch (e) {
    const error = e as Error;
    dispatch(albumsSlice.actions.albumsFetchingError(error.message));
  }
};

export default getAlbums;

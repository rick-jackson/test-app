import axios from "axios";

import type Album from "@entities/album";
import { AppDispatch } from "@store/index";
import { albumsSlice } from "@store/reducers/albums";

const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(albumsSlice.actions.albumsFetching());
    const response = await axios.get<Album[]>(
      `${process.env.REACT_APP_URL}/albums`,
    );
    dispatch(albumsSlice.actions.albumsFetchingSuccess(response.data));
  } catch (e) {
    const error = e as Error;
    dispatch(albumsSlice.actions.albumsFetchingError(error.message));
  }
};

export default getAlbums;

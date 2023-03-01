import { FC, useEffect } from "react";

import type Album from "@entities/album";
import type User from "@entities/user";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import getAlbums from "@store/actions/albums";
import Snackbar from "@component/UI/Snackbar";
import Backdrop from "@component/UI/Backdrop";
import Modal from "@component/Modal";

import * as Styled from "./index.styled";

type AlbumsListProps = {
  userId: User["id"];
  closeModal: () => void;
};

const AlbumsList: FC<AlbumsListProps> = ({ userId: id, closeModal }) => {
  const dispatch = useAppDispatch();
  const { albums, error, isLoading } = useAppSelector(
    (state) => state.albumsReducer,
  );

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  return (
    <>
      <Snackbar message={error} />
      <Backdrop open={isLoading} />
      {!error && (
        <Modal closeModal={closeModal}>
          <Styled.AlbumsList>
            {albums
              .filter(
                ({ userId }: { userId: Album["userId"] }) => userId === id,
              )
              .map(({ title, id }) => (
                <Styled.AlbumsListItem key={id}>{title}</Styled.AlbumsListItem>
              ))}
          </Styled.AlbumsList>
        </Modal>
      )}
    </>
  );
};

export default AlbumsList;

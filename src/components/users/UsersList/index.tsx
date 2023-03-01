import { FC, useEffect } from "react";

import type User from "@entities/user";
import { useAppDispatch, useAppSelector } from "hooks";
import Snackbar from "@component/UI/Snackbar";
import Backdrop from "@component/UI/Backdrop";
import getUsers from "store/actions/users";
import UserCard from "../UsersCard";

import * as Styled from "./index.styled";

const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  const { users, error, isLoading } = useAppSelector(
    (state) => state.usersReducer,
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Snackbar message={error} />
      <Backdrop open={isLoading} />
      <Styled.UsersList>
        {users.map((user: User) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Styled.UsersList>
    </>
  );
};

export default UsersList;

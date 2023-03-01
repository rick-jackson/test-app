import { FC, useState } from "react";
import { Link } from "react-router-dom";

import type User from "@entities/user";
import AlbumsList from "@component/Albums";

import * as Styled from "./index.styled";

const UserCard: FC<User> = ({ name, email, address, id }) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const { city, street, suite, zipcode } = address;
  return (
    <>
      {isOpenModal && (
        <AlbumsList userId={id} closeModal={() => setOpenModal(false)} />
      )}
      <Styled.UserCard>
        <Styled.UserInfo>
          <Styled.UserName>{name}</Styled.UserName>
          <Styled.UserEmail>Email: {email}</Styled.UserEmail>
          <Styled.Divider />
          <Styled.UserRowItem>City: {city}</Styled.UserRowItem>
          <Styled.UserRowItem>Street: {street}</Styled.UserRowItem>
          <Styled.UserRowItem>Suite: {suite}</Styled.UserRowItem>
          <Styled.UserRowItem>Code: {zipcode}</Styled.UserRowItem>
        </Styled.UserInfo>
        <Styled.ActionsButtons>
          <Link
            style={{ width: "100%" }}
            target={"_blank"}
            to={{
              pathname: `/user/${id}/posts`,
            }}
          >
            <Styled.Button>ПОСТИ</Styled.Button>
          </Link>
          <Styled.Button onClick={() => setOpenModal(true)}>
            АЛЬБОМИ
          </Styled.Button>
        </Styled.ActionsButtons>
      </Styled.UserCard>
    </>
  );
};

export default UserCard;

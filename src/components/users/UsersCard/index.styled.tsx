import styled from "styled-components";

export const UserCard = styled.div`
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserName = styled.span`
  font-size: 24px;
`;

export const UserEmail = styled.span`
  font-sie: 18px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #0000ff94;
`;

export const UserRowItem = styled.span`
  font-size: 14px;
`;

export const ActionsButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  padding: 8px;
  color: #0000ff94;
  background: none;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid #0000ff94;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #0000ff94;
    color: #fff;
  }
`;

import styled from "styled-components";

export const ModalBlured = styled.div`
  background-color: #8080805c;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-top: 0;
  width: 400px;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  background: #fff;
  border-radius: 5px;
  opaciti: 1;
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  transform: rotate(45deg);
  color: #0000ff94;
`;

import { FC } from "react";

import * as Styled from "./index.styled";

type ModalProps = {
  children: React.ReactElement;
  closeModal: () => void;
};

const Modal: FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <Styled.ModalBlured>
      <Styled.Modal>
        <Styled.CloseButton onClick={() => closeModal()}>+</Styled.CloseButton>
        {children}
      </Styled.Modal>
    </Styled.ModalBlured>
  );
};

export default Modal;

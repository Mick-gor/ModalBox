import Modal from "./Modal";
import { ModalProps } from "./Modal";
import * as Styled from "./Modal.styles";

const ModalView = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <Styled.ModalOverlay>
      <Styled.Backdrop />
      <Modal
        buttonCTA={buttonCTA}
        title={title}
        handleButtonClick={handleButtonClick}
      />
    </Styled.ModalOverlay>
  );
};

export default ModalView;

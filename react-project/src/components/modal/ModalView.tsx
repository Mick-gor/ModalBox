import Modal from "./Modal";
import { ModalProps } from "./Modal";
import { ModalOverlayStyled, Backdrop } from "./Modal.styles";

const ModalView = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <ModalOverlayStyled>
      <Backdrop />
      <Modal
        buttonCTA={buttonCTA}
        title={title}
        handleButtonClick={handleButtonClick}
      />
    </ModalOverlayStyled>
  );
};

export default ModalView;

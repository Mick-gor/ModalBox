import Modal from "./Modal";
import { ModalProps } from "./Modal";
import * as Styles from "./Modal.styles";

const ModalView = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <Styles.ModalOverlay>
      <Styles.Backdrop />
      <Modal
        buttonCTA={buttonCTA}
        title={title}
        handleButtonClick={handleButtonClick}
      />
    </Styles.ModalOverlay>
  );
};

export default ModalView;

import Modal from "./Modal";
import { ModalProps } from "./Modal";

const ModalView = ({
  title,
  buttonCTA,
  handleButtonClick,
}: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="backdrop" />
      <Modal
        buttonCTA={buttonCTA}
        title={title}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default ModalView;

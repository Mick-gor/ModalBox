import Modal from "./Modal";
import { MOCK } from "../../data.mock";

interface ModalViewProps {
  handleModalVisible: () => void;
}

const ModalView = ({ handleModalVisible }: ModalViewProps) => {
  return (
    <div className="modal-overlay">
      <div className="backdrop" />
      <Modal
        buttonCTA={MOCK.buttonClose}
        title={MOCK.title}
        handleButtonClick={handleModalVisible}
      />
    </div>
  );
};

export default ModalView;

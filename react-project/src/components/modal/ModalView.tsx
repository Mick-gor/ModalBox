import Modal from "./Modal";

interface ModalViewProps {
  title: string;
  buttonCTA: string;
  handleModalVisible: () => void;
}

const ModalView = ({
  title,
  buttonCTA,
  handleModalVisible,
}: ModalViewProps) => {
  return (
    <div className="modal-overlay">
      <div className="backdrop" />
      <Modal
        buttonCTA={buttonCTA}
        title={title}
        handleButtonClick={handleModalVisible}
      />
    </div>
  );
};

export default ModalView;

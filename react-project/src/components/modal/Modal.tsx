import Button from "../button/Button";
import Title from "../title/Title";
import { MOCK } from "../../data.mock";

interface ModalProps {
  title: string;
  buttonCTA: string;
  handleButtonClick: () => void;
}

const Modal = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <div className="modal-container">
      <div className="title-container">
        <Title color="white">{title}</Title>
      </div>
      <div className="button-modal-container">
        <Button variant="black" onClick={handleButtonClick}>
          {buttonCTA}
        </Button>
      </div>
    </div>
  );
};

export default Modal;

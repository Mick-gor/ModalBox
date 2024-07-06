import Button from "../button/Button";
import Title from "../title/Title";
import { MOCK } from "../../data.mock";

interface ModalProps {
  children?: string;
  onClick: () => void;
}

const Modal = ({ children, onClick }: ModalProps) => (
  <div className="modal-container">
    <div className="title-container">
      <Title color="white">{MOCK.title}</Title>
    </div>
    <div className="button-modal-container">
      <Button type="button" variant="button-black" onClick={onClick}>
        {MOCK.buttonClose}
      </Button>
    </div>
  </div>
);

export default Modal;

import Button from "../button/Button";
import Title from "../title/Title";
import * as Styles from "./Modal.styles";
export interface ModalProps {
  title: string;
  buttonCTA: string;
  handleButtonClick: () => void;
}

const Modal = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <Styles.ModalContainer>
      <Styles.TitleContainer>
        <Title color="white">{title}</Title>
      </Styles.TitleContainer>
      <Styles.ButtonModalContainer>
        <Button variant="black" onClick={handleButtonClick}>
          {buttonCTA}
        </Button>
      </Styles.ButtonModalContainer>
    </Styles.ModalContainer>
  );
};

export default Modal;

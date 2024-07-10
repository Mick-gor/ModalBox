import Button from "../button/Button";
import Title from "../title/Title";
import * as Styled from "./Modal.styles";
export interface ModalProps {
  title: string;
  buttonCTA: string;
  handleButtonClick: () => void;
}

const Modal = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <Styled.ModalContainer>
      <Title color="white">{title}</Title>
      <Styled.ButtonModalContainer>
        <Button variant="black" onClick={handleButtonClick}>
          {buttonCTA}
        </Button>
      </Styled.ButtonModalContainer>
    </Styled.ModalContainer>
  );
};

export default Modal;

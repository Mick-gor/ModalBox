import Button from "../button/Button";
import Title from "../title/Title";
import { ModalContainerStyled } from "./Modal.styles";
import { TitleContainerStyled } from "../title/Title.styles";
import { ButtonModalContainerStyled } from "../button/Button.styles";

export interface ModalProps {
  title: string;
  buttonCTA: string;
  handleButtonClick: () => void;
}

const Modal = ({ title, buttonCTA, handleButtonClick }: ModalProps) => {
  return (
    <ModalContainerStyled>
      <TitleContainerStyled>
        <Title color="white">{title}</Title>
      </TitleContainerStyled>
      <ButtonModalContainerStyled>
        <Button variant="black" onClick={handleButtonClick}>
          {buttonCTA}
        </Button>
      </ButtonModalContainerStyled>
    </ModalContainerStyled>
  );
};

export default Modal;

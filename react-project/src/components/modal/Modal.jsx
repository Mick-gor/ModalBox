import Button from "../button/Button";
import Title from "../title/Title";
import { MOCK } from "../../data.mock";

const Modal = (props) => (
  <div className='modal-container'>
    <div className='title-container'>
      <Title color='white'>{MOCK.title}</Title>
    </div>
    <div className='button-modal-container'>
      <Button type='button' variant='white' onClick={props.handleButtonClick}>
        {MOCK.buttonClose}
      </Button>
    </div>
  </div>
);

export default Modal;

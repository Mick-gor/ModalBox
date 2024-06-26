import Button from "../button/Button";
import Title from "../title/Title";
import { handleButtonOnClick } from "../../utils.js";
import { MOCK } from "../../data.mock";

const Modal = () => (
  <div className='modal-container'>
    <div className='title-container'>
      <Title color='white'>{MOCK.title}</Title>
    </div>
    <div className='button-modal-container'>
      <Button type='button' variant='white' onClick={handleButtonOnClick}>
        {MOCK.buttonClose}
      </Button>
    </div>
  </div>
);

export default Modal;

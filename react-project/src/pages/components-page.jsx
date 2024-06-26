import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import { handleButtonOnClick } from "../utils.js";
import { MOCK } from "../data.mock";

export const ComponentsPage = () => {
  return (
    <div className='components-page-container'>
      <div>
        <p>Button black:</p>
        <Button type='button' variant='black' onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </div>
      <div>
        <p>Button white:</p>
        <Button type='button' variant='white' onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </div>
      <div className='button-wrapper-component-page'>
        <p>Button with wrapper:</p>
        <Button type='button' variant='black' onClick={handleButtonOnClick}>
          {MOCK.buttonOpen}
        </Button>
      </div>
      <div>
        <p>Title:</p>
        <Title color='black'>{MOCK.title}</Title>
      </div>
      <div>
        <p>Description:</p>
        <Description>{MOCK.description}</Description>
      </div>
    </div>
  );
};

export default ComponentsPage;

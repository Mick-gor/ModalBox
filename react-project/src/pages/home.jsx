import Button from "../components/button/Button";
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import { handleButtonOnClick } from "../utils.js";
import { MOCK } from "../data.mock";

export const Home = () => {
  return (
    <div className='main-container'>
      <div className='content-container'>
        <div className='title-container'>
          <Title color='black'>{MOCK.title}</Title>
        </div>
        <div className='description-container'>
          <Description>{MOCK.description}</Description>
        </div>
        <div className='button-container'>
          <Button type='button' variant='black' onClick={handleButtonOnClick}>
            {MOCK.buttonOpen}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

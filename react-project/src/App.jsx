import Button from "./components/button/Button";
import Description from "./components/description/Description";
import Title from "./components/title/Title";
import { MOCK } from "./data.mock";

const App = () => (
  <main className='main-container'>
    <div className='content-container'>
      <div className='title-container'>
        <Title color='black'>{MOCK.title}</Title>
      </div>
      <div className='description-container'>
        <Description>{MOCK.description}</Description>
      </div>
      <div className='button-container'>
        <Button type='button'>{MOCK.button}</Button>
      </div>
    </div>
  </main>
);

export default App;

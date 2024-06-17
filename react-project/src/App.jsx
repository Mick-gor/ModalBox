import "./App.css";
import Title from "./components/title/Title";
import Description from "./components/description/Description";
import { MOCK } from "./data.mock";

const App = () => {
  return (
    <main>
      <div className="container">
        <Title color="black">{MOCK.title}</Title>
        <Description>{MOCK.description}</Description>
      </div>
    </main>
  );
};

export default App;

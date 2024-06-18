import "./App.css";
import Description from "./components/description/Description";
import Title from "./components/title/Title";
import { MOCK } from "./data.mock";

const App = () => (
  <main>
    <div className="container">
      <Title color="black">{MOCK.title}</Title>
      <Description>{MOCK.description}</Description>
    </div>
  </main>
);

export default App;

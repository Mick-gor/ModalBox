import "./App.css";
import Title from "./components/Title";
import { MOCK } from "./data.mock";

const App = () => {
  return (
    <main>
      <Title color="black">{MOCK.title}</Title>
    </main>
  );
};

export default App;

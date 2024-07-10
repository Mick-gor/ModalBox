import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/components";
import Home from "./pages/home";
import { GlobalStyles } from "./global.styles";

const App = () => {
  return (
    <main>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

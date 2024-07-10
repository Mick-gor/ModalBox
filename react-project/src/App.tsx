import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./components/ComponentsPage/components-page";
import Home from "./pages/home";
import { GlobalStyles } from "./global.styles";

const App = () => {
  return (
    <main>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

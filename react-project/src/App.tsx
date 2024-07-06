import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/components-page";
import Home from "./pages/home";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/components' element={<ComponentsPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

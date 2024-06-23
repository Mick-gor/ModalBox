import { HashRouter, Routes, Route } from "react-router-dom";
import Comp from "./pages/compsite";
import Home from "./pages/home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/compsite' element={<Comp />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import DrivePage from "./pages/DrivePage";
import ExhibitionPage from "./pages/ExhibitionPage";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import ThemePage from "./pages/ThemePage";
import VotePage from "./pages/VotePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="exhibition" element={<ExhibitionPage />} />
        <Route path="theme" element={<ThemePage />} />
        <Route path="vote" element={<VotePage />} />
        <Route path="drive" element={<DrivePage />} />
        <Route path="market" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

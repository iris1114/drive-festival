import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import DrivePage from "./pages/DrivePage";
import ExhibitionPage from "./pages/ExhibitionPage";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import ThemePage from "./pages/ThemePage";
import VotePage from "./pages/VotePage";
import Footer from "./components/layout/Footer";
import { DialogProvider } from "./contexts/DialogContent";
import ExhibitionDetialPage from "./pages/ExhibitionDetialPage";
import ThemeDetialPage from "./pages/ThemeDetialPage";

const App = () => {
  return (
    <DialogProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="exhibition" element={<ExhibitionPage />} />
          <Route
            path={`exhibition/:exhibitionId`}
            element={<ExhibitionDetialPage />}
          ></Route>
          <Route path="theme" element={<ThemePage />} />
          <Route path={`theme/:themeId`} element={<ThemeDetialPage />}></Route>
          <Route path="vote" element={<VotePage moreBtn={false} />} />
          <Route path="drive" element={<DrivePage moreBtn={false} />} />
          <Route path="market" element={<MarketPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DialogProvider>
  );
};

export default App;

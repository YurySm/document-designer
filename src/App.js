import { useCallback, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfferPage from './pages/OfferPage'
import Main from './pages/Main';
import OfferPayPage from "./pages/OfferPayPage";
import fontRegister from './utils/fontRegister';

function App() {

  useEffect(() => {
    fontRegister()
  }, [])

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="offer/*" element={<OfferPage />} />
          <Route path="offer-pay/*" element={<OfferPayPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

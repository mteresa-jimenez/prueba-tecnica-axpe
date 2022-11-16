import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";


import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const positionY = window.scrollY;

    if (positionY < scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }

    setScrollY(positionY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div data-test="app">
      {show && <MainNavigation />}
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new" element={<NewMeetupsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

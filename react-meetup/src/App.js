import { useState, useEffect } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const positionY = window.scrollY;

    if(positionY < scrollY) { 
      setShow(true)
    } else {
      setShow(false)
    }

    setScrollY(positionY);
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
})

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  return (
    <div data-test="app">
      {show && <MainNavigation setPage={setPage} />}
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;

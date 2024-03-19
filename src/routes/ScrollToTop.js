import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page whenever the pathname changes
  }, [pathname]);

  return null; // This component doesn't render anything in the DOM
}

export default ScrollToTop;

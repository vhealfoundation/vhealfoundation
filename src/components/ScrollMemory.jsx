import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component maintains scroll positions across page navigations
const ScrollMemory = () => {
  const { pathname, search, hash } = useLocation();

  // Store scroll positions in sessionStorage
  useEffect(() => {
    // Save the current scroll position when leaving a page
    const handleBeforeUnload = () => {
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(`scrollPos-${pathname}${search}`, scrollPosition.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    
    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Save position when navigating away from this route
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(`scrollPos-${pathname}${search}`, scrollPosition.toString());
    };
  }, [pathname, search]);

  // Restore scroll position when returning to a page
  useEffect(() => {
    // If there's a hash in the URL (like #section1), let the browser handle the scrolling
    if (hash) {
      return;
    }

    // Small delay to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      const savedPosition = sessionStorage.getItem(`scrollPos-${pathname}${search}`);
      
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
      } else {
        // If no saved position, scroll to top (for new page visits)
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, search, hash]);

  return null; // This component doesn't render anything
};

export default ScrollMemory;

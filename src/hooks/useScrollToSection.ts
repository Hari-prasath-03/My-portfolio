import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollToSection = (cleanUrl: string = '') => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      
      const scrollTimeout = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          const cleanTimeout = setTimeout(() => {
            const urlToNavigate = cleanUrl || location.pathname;
            navigate(urlToNavigate, { replace: true });
          }, 1200);
          
          return () => clearTimeout(cleanTimeout);
        } else {
          setTimeout(() => {
            const urlToNavigate = cleanUrl || location.pathname;
            navigate(urlToNavigate, { replace: true });
          }, 500);
        }
      }, 150);
      
      return () => clearTimeout(scrollTimeout);
    }
  }, [location.hash, location.pathname, navigate, cleanUrl]);
};

export default useScrollToSection;

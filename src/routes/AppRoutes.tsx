import { useRoutes } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import LinearGradient from "../pages/LinearGradient";
import DetailedAbout from "../pages/DetailedAbout";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Portfolio /> },
    { path: "/lg-css", element: <LinearGradient /> },
    { path: "/about", element: <DetailedAbout /> },
  ]);
};

export default AppRoutes;

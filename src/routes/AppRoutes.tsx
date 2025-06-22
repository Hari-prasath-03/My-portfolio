import { useRoutes } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import LinearGradient from "../pages/LinearGradient";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Portfolio /> },
    { path: "/lg-css", element: <LinearGradient /> },
  ]);
};

export default AppRoutes;

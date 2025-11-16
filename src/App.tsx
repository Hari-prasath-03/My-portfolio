import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/ui/Cursor";
import Navbar from "./components/ui/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/sections/Footer";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Cursor />
    <Navbar />
    <AppRoutes />
    <Footer />
  </BrowserRouter>
);

export default App;

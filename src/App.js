import "./App.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.jsx";
import Formulary from "./components/Formulary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import DetailBy from "./pages/DetailPage/DetailBy";
import DetailRent from "./pages/DetailsRent/DetailRent";
import Footer from "./components/FooterComponent/FooterComponent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route index element={<LandingPageComponent />} />
          <Route path="/detailBy" element={<DetailBy />} />
          <Route path="/detailRent" element={<DetailRent />} />
          <Route path="/fomulary" element={<Formulary />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

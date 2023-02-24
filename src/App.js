import "./App.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.jsx";
import Formulary from "./components/Formulary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";
import DetailBy from "./pages/DetailPage/DetailBy";
import DetailRent from "./pages/DetailsRent/DetailRent";
import Footer from "./components/FooterComponent/FooterComponent";
import IconComponent from "./components/iconComponent/IconComponent";
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
          <Route path="/detail" element={<IconComponent />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

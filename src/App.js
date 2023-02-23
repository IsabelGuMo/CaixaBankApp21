import "./App.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      <FooterComponent/>
      </BrowserRouter> 
    </div>
  );
}

export default App;

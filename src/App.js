import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import Formulary from './components/Formulary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageComponent from './components/LandingPageComponent/LandingPageComponent';
import DetailBy from './pages/DetailPage/DetailBy';
import DetailRent from './pages/HomePage/DeatailRent';
import DetailPage from './pages/DetailPage/DetailPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
      <DetailPage/>
      <DetailBy/>
      <DetailRent/>
      <Formulary/>
        <Routes>
        <Route index element={<LandingPageComponent/>} />
        <Route path='/detailPage' element={<DetailPage/>}/>
        <Route path='/detailBy' element={<DetailBy/>}/>
        <Route path='/detailRent' element={<DetailRent/>}/>
        <Route path='/fomulary' element={<Formulary/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

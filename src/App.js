import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPageComponent from './components/LandingPageComponent/LandingPageComponent';
import DetailBy from './pages/DetailPage/DetailBy';
import DetailRent from './pages/HomePage/DeatailRent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
      
        <Routes>
        <Route index element={<LandingPageComponent/>} />
        <Route path='/detailBy' element={<DetailBy/>}/>
        <Route path='/detailRent' element={<DetailRent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

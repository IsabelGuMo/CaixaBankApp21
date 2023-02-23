import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import Formulary from './components/Formulary'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
      <Formulary />
        <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

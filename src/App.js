import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent.jsx';
import HousesComponent from './components/HousesComponent/HousesComponent.jsx';
import IconComponent from './components/iconComponent/IconComponent';



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <IconComponent/>
      <HousesComponent />
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import {Testimonios} from './components/Testimonios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo_testimonio'>Bienvenidos al bloque</h1>
        <Testimonios
          nombre= "Emma Bostian"
          pais = "Suecia"
          imagen = "img1"
          cargo = "Ingeniera de Software"
          empresa = "Spotify"
          testimonio = "Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Testimonios
          nombre= "Richard Ponce"
          pais = "Bolivia"
          imagen = "img2"
          cargo = "Area contble"
          empresa = "Spotify new"
          testimonio = "contable de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Testimonios
          nombre= "Antonio Ponce"
          pais = "Estados Unidos"
          imagen = "img1"
          cargo = "Desarrollador FrontEnd"
          empresa = "GOOGLE"
          testimonio = "Desarrollador de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        /> 
        
      </div>
    </div>
  );
}

export default App;

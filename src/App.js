//import logo from './logo.svg';
import './App.scss';
//import {Testimonios} from './components/Testimonios';
import { Testimonios } from './components/Testimonios';
//import { Pie } from './components/Pie';

//import Pie from './components/Pie';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

        <h1 className='container_title'>Mi primer componente en react js</h1>
        <Testimonios
          nombre= "Emma Bostian"
          pais = "Suecia"
          imagen = "img1"
          cargo = "Ingeniera de Software"
          empresa = "Spotify"
          testimonio = "Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Testimonios
          nombre= "Juan Guzman"
          pais = "Mexico"
          imagen = "img2"
          cargo = "Ingeniera de Software"
          empresa = "Spotify"
          testimonio = "Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />

        <Testimonios
          nombre= "Edgar Montalvan"
          pais = "Grecia"
          imagen = "img1"
          cargo = "Diseñador Grafico"
          empresa = "Spotify"
          testimonio = "Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu Ingeniera de Software en spotyfuIngeniera de Software en spotyfuIngeniera de Software en spotyfu"
        />
        
      </div>
    </div>
  );
}

export default App;

import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo (1).png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='frecodecamp-logo' />
      </div>
     <div className='tareas-lista-principal'>
      <h1> Tareas Pendientes </h1>
      <ListaDeTareas />
     </div>
    </div>
  );
}

export default App;

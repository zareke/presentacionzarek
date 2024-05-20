import "./App.css";
import Seccion from "./components/Seccion";
import Imagensita from "./imgs/chico-calavera_2.png";
import unity from "./imgs/unity.png";
import csharp from "./imgs/c-4.svg";
import js from "./imgs/Unofficial_JavaScript_logo_2.svg.png";
function App() {
  return (
    <div>
      <header className="header">
        <h1>ZAREK</h1>
        <nav>
          <ul>
            <li>
              <a href="#Sobre mí">Sobre mí</a>
            </li>
            <li>
              <a href="#Conocimientos">Conocimientos</a>
            </li>
            <li>
              <a href="#Experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#Educación">Educación</a>
            </li>
            <li>
              <a href="#Certificaciones">Certificaciones</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="sobremi">
        <div className="centrador">
          <Seccion className="Sobre mí"></Seccion>
          <img id="imagensita" src={Imagensita} alt="imagensita"></img>
          <p>
            Hola, me llamo Zarek Alexis Nazar Dutka, y soy un apasionado de la
            informatica y las ciencias
          </p>
          <Seccion className="Conocimientos"></Seccion>
          <div className="conimgsbig">
            <div className="conimgs">
              <img className="imgfromcon" src={unity} alt="unity"></img>
            </div>
            <div className="conimgsbig">
              <img className="imgfromcon" src={csharp} alt="csharp"></img>
            </div>
            <div className="conimgsbig">
              <img className="imgfromcon" src={js} alt="java"></img>
            </div>
          </div>
          <Seccion className="Experiencia"></Seccion>
          <Seccion className="Educación"></Seccion>
          <Seccion className="Certificaciones"></Seccion>
          <Seccion className="Contacto"></Seccion>
        </div>
      </div>
    </div>
  );
}

export default App;

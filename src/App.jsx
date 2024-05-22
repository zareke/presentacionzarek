import "./App.css";
import Seccion from "./components/Seccion";
import Imagensita from "./imgs/chico-calavera_2.png";
import unity from "./imgs/unity.png";
import csharp from "./imgs/c-4.svg";
import js from "./imgs/Unofficial_JavaScript_logo_2.svg.png";
import Exp from "./components/CartaExperiencia.jsx"
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
              <p>Desarrollo de videojuegos en Unity C#</p>
            </div>
            <div className="conimgs">
              <img className="imgfromcon" src={csharp} alt="csharp"></img>
              <p>C# (MVC y .NET)</p>
            </div>
            <div className="conimgs">
              <img className="imgfromcon" src={js} alt="java"></img>
              <p>Javascript (React, MVC, y NPM)</p>
            </div>
          </div>
          <Seccion className="Experiencia"></Seccion>
          <div className="losbloques">
            <Exp className="Hangover" texto ="Fullstack developer y co-fundador de la startup para lo compra y venta de prendas de ropa on-demand Hangover."></Exp>
            <Exp className="Profesor" texto="Actualmente trabajo como profesor de programacion en los idiomas que manejo"></Exp>
            <Exp className="Hollow Knight" texto="Formé parte como desarrollador del famoso videojuego Hollow Knight"></Exp>
          </div>
          <Seccion className="Educación"></Seccion>
          <Seccion className="Certificaciones"></Seccion>
          <Seccion className="Contacto"></Seccion>
        </div>
      </div>
    </div>
  );
}

export default App;

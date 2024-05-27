import "./App.css";
import Seccion from "./components/Seccion";
import Imagensita from "./imgs/chico-calavera_2.png";
import unity from "./imgs/unity.png";
import csharp from "./imgs/c-4.svg";
import js from "./imgs/Unofficial_JavaScript_logo_2.svg.png";
import Exp from "./components/CartaExperiencia.jsx";
import coderhouse from "./imgs/coderhouse-aprende-haciendo.jpg";
import hackerrank from "./imgs/HackerRank_Icon-1000px.png";
import ContactForm from "./components/ContactForm.jsx" 
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
      <div>
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
            <Exp
              className="Hangover"
              texto="Fullstack developer y co-fundador de la startup para lo compra y venta de prendas de ropa on-demand Hangover."
            ></Exp>
            <Exp
              className="Profesor"
              texto="Actualmente trabajo como profesor de programacion en los lenguajes que manejo"
            ></Exp>
            <Exp
              className="Hollow Knight"
              texto="Formé parte como desarrollador del famoso videojuego Hollow Knight"
            ></Exp>
          </div>
          <Seccion className="Educación"></Seccion>
          <table className="table">
            <tr>
              <th>ORT</th>
              <th>UBA</th>
            </tr>
            <tr>
              <td>
                Mis estudios secundarios se realizaron en la escuela ORT, bajo
                la especializacion de informaitca. Allí fue mi primer contacto
                con Javascript, aunque C# ya lo usaba.
              </td>
              <td>
                En UBA estudié ingenieria informatica. Donde aprendi
                profesionalmente a usar los lenguajes de programacion que ya
                conocia, y conocí mas idiomas.
              </td>
            </tr>
          </table>
          <Seccion className="Certificaciones"></Seccion>
          <div className="conimgsbig">
            <div className="conimgs">
              <img
                className="imgfromcon"
                style={{ border: "1px solid black" }}
                src={coderhouse}
                alt="unity"
              ></img>
              <p>Coder House</p>
            </div>
            <div className="conimgs">
              <img className="imgfromcon" src={hackerrank} alt="csharp"></img>
              <p>HackerRank</p>
            </div>
          </div>
          <Seccion className="Contacto"></Seccion>
        </div>
      </div>
      <ContactForm></ContactForm>
      <footer className="footer">
        <h1>ZAREK</h1>
        <p>La imaginacion es mas importante que el conocimiento</p>
      </footer>
    </div>
  );
}

export default App;

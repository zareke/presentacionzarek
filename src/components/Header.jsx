import './Header.css'

export default function Header(){
    return(
        <div>
            <header className='header'>
            <h1>ZAREK</h1>
            <nav>
                <ul>
                    <li><a href="/">Sobre mí</a></li>
                    <li><a href="/">Conocimientos</a></li>
                    <li><a href="/">Experiencia</a></li>
                    <li><a href="/">Educación</a></li>
                    <li><a href="/">Certificaciones</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}
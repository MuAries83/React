export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="titulo-sitio">
            Nomebre del sitio
        </a>
        <ul>
            <li className="active">
                <a href="/Precios">Precios</a>
            </li>
            <li>
                <a href="/Nosotros">Nosotros</a>
            </li>
        </ul>
    </nav>
}
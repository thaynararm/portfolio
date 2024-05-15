import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <nav className="container">
                <ul className="container__links">   
                    <li><NavLink exact to="/" activeClassName="active">INÍCIO</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">SOBRE MIM</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active">PROJETOS</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">CONTATO</NavLink></li>
                </ul>
            </nav>
        </header>
    );
  };

export default Header;

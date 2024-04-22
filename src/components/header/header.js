import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div className="container">
                        <div className="links">
                        <NavLink exact to="/" activeClassName="active">INÍCIO</NavLink>
                        <NavLink to="/about" activeClassName="active">SOBRE MIM</NavLink>
                        <NavLink to="/projects" activeClassName="active">PROJETOS</NavLink>
                        <NavLink to="/contact" activeClassName="active">CONTATO</NavLink>
                        </div>
                        <div className="menu">
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
  };

export default Header;

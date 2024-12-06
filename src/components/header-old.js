import React from "react";
import { Link } from "gatsby"
import Logo from "../images/logo.png";

const Header = () => {

    return (<header><div className="logo">
        <Link to="/" activeClassName="active"><img src={Logo} alt="logo Stowarzyszenia" height="100" /></Link>
    </div>
        {/* <div className="search">SEARCH</div> */}
        <nav>
            <ul>
                <li><Link to="/oferta" activeClassName="active">Oferta</Link></li>
                <li><Link to="/dzialalnosc" activeClassName="active">Działalność</Link></li>
                <li><Link to="/o-regionie" activeClassName="active">O regionie</Link></li>
                <li><Link to="/stowarzyszenie" activeClassName="active">Stowarzyszenie</Link></li>
                <li><Link to="/kontakt" activeClassName="active">Kontakt</Link></li>
            </ul>
        </nav></header>)
}

export default Header

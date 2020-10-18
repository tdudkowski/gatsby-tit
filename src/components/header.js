import React from "react";
import { Link } from "gatsby"
import Logo from "../images/logo.png";

const Header = () => {
  
  return (<header><div className="logo">
      <a href="/"><img src={Logo} alt="logo Stowarzyszenia" height="100"/></a>
            </div>
  {/* <div className="search">SEARCH</div> */}
  <nav>
    <ul>
      <li><Link to="/oferta">Oferta</Link></li>
      <li><Link to="/projekty">Działalność</Link></li>
      {/* <li><Link to="/#3">O regionie</Link></li> */}
      <li><Link to="/stowarzyszenie">O nas</Link></li>
      <li><Link to="/kontakt">Kontakt</Link></li>
    </ul>
  </nav></header>)}

export default Header

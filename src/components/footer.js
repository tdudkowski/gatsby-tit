import React from "react"
import {Link} from "gatsby"

const Footer = () => {
  return (<footer>

<div><h3>Mapa strony</h3>

<ul>
  <li><Link to="/">Strona główna</Link></li>
  <li><Link to="/oferta">Oferta</Link>
<ul>
<li><Link to="/przewodnicy">Przewodnicy</Link></li>
<li><Link to="/trasy-wycieczek">Trasy wycieczek</Link></li>
<li><Link to="/publikacje">Publikacje</Link></li>
  </ul>
  </li>
  <li><Link to="/projekty">Działalność</Link>
  <ul>
    <li><Link to="/tropem-naszego-dziedzictwa">Tropem naszego dziedzictwa</Link></li>
    <li><Link to="/opowiem-ci-o-wroclawiu">Opowiem ci o Wrocławiu</Link></li>
    <li><Link to="/od-slowa-do-slowa">Od słowa do słowa</Link></li>
    <li><Link to="/odkryj-to-sam">Odkryj to sam</Link></li>
  </ul>
  </li>
  
  <li><Link to="/stowarzyszenie">Stowarzyszenie</Link></li>
  <li><Link to="/kontakt">Kontakt</Link></li>
</ul>
</div>

<div className="contact">
<h3>Stowarzyszenie</h3>
<div>
Stowarzyszenie Podróżników TUiTAM<br/>
Wierzbice, ul. Lipowa 47<br/>
55-040 Kobierzyce<br/>
</div>
<ul>
<li>+48 661 172 250</li>
<li>tuitam.przewodnicy@interia.pl</li>
<li>przewodnicy.org</li>
 </ul>
 </div>
    <hr/>
    <p>Zbudowano w <a href="https://www.gatsbyjs.com">Gatsby</a>. Projekt i realizacja <a href="http://dygresje.info">dygresje.info</a>.</p>
  </footer>)}

export default Footer
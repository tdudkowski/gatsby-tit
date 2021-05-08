import React from "react"
import { Link } from "gatsby"
import "../styles/font-awesome/css/font-awesome.css"

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
        <li><Link to="/dzialalnosc">Działalność</Link>
          <ul>
            <li className="line">2020-21</li>
            <li><Link to="/tropem-naszego-dziedzictwa">Tropem naszego dziedzictwa</Link></li>
            <li><Link to="/opowiem-ci-o-wroclawiu">Opowiem ci o Wrocławiu</Link></li>
            <li><Link to="/od-slowa-do-slowa">Od słowa do słowa</Link></li>
            <li><Link to="/odkryj-to-sam">Odkryj to sam</Link></li>
            <li><Link to="/z-wroclawiem-w-tle">Z Wrocławiem w tle</Link></li>
            <li><Link to="/wroclaw-natura-sztuka-architektura">"Wrocław. Natura, sztuka i architektura"</Link></li>
            <li className="line">Poprzednie lata</li>
            <li><Link to="/odkrywamy-wroclaw">Odkrywamy Wrocław</Link></li>
            <li><Link to="/poznajemy-wroclaw">Poznajemy Wrocław</Link></li>
            <li><Link to="/strona-po-stronie">Strona po stronie</Link></li>
            <li><Link to="/szkola-w-miescie">Szkoła w mieście</Link></li>
            <li><Link to="/wycieczki-po-dolnym-slasku-i-nie-tylko">Wycieczki po Dolnym Śląsku i nie tylko</Link></li>
            <li><Link to="/szkola-w-miescie">Szkoła w mieście</Link></li>
          </ul>
        </li>
        <li><Link to="/o-regionie">O regionie</Link>
          <ul>
            <li><Link to="/wroclaw">Wrocław</Link></li>
            <li><Link to="/dolny-slask">Dolny Śląsk</Link></li>
            <li><Link to="/materialy">Materiały</Link></li>
          </ul>
        </li>
        <li><Link to="/stowarzyszenie">Stowarzyszenie</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </div>

    <div className="contact-data">
      <h3>Dane kontaktowe</h3>
      <div>
        Stowarzyszenie Podróżników TUiTAM<br />
Wierzbice, ul. Lipowa 47<br />
55-040 Kobierzyce<br />
      </div>
      <ul>
        <li> <i className="fa fa-mobile" aria-hidden="true"></i>&nbsp; +48 661 172 250</li>
        <li> <i className="fa fa-at" aria-hidden="true"></i> tuitam.przewodnicy@interia.pl</li>
        <li> <i className="fa fa-laptop" aria-hidden="true"></i> przewodnicy.org</li>
      </ul>
    </div>
    <hr />
    <p>Zbudowano w <a href="https://www.gatsbyjs.com">Gatsby</a>. Projekt i realizacja <a href="http://dygresje.info">dygresje.info</a>.</p>
  </footer>)
}

export default Footer

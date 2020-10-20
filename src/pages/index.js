import React from 'react'
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout"
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandPointRight
} from '@fortawesome/free-regular-svg-icons'

export default ({data}) => {
    // console.log(data)
return (
<Layout>
<section className="hero">
          <div>
            <div>
              <p>Szukasz przewodnika lub pilota?</p>
              <Link to="/przewodnicy" className="link-button">Nasi przewodnicy</Link>
            </div>
            <div>
              <p>Poznaj nasze Stowarzyszenie</p>
              <Link to="/projekty" className="link-button">Nasze projekty</Link>
            </div>
            <div>
              <p>Chcesz zorganizować wycieczkę?</p>
              <Link to="/kontakt" className="link-button">Wyślij wiadomość</Link>
            </div>
          </div>
        </section>
        <section className="fb-info">
          <div className="mission">
            
            <Img fluid={data.logo.childImageSharp.fluid} className="logo" />
            <h3>Stowarzyszenie TUiTAM</h3>
            <p>
              Celem naszego Stowarzyszenia jest propagowanie wiedzy o Wrocławiu
              i Dolnym Śląsku. Nasi przewodnicy oferują usługi przewodnickie po
              Wrocławiu, okolicach Wrocławia oraz Dolnym Śląsku dla grup
              zorganizowanych i indywidualnych turystów.
            </p>
            <p>Na naszej stronie:</p>

            <ul>
              <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
                dowiesz się o formach naszej działalności, o tym, jakie
                  realizujemy projekty
              </li>
              <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
                możesz zamówić przewodnika i wybrać trasę wycieczki
              </li>
              <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
poczytasz o Wrocławiu i o Dolnym Śląsku (już wkrótce).</li>
            </ul>
          </div>

          <div className="facebook">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FstowarzyszenieTUiTAM%2F&tabs=timeline&width=540&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              title="facebook-iframe"
              width="540"
              height="500"
              style={{border: "none", overflow: "hidden"}}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </section>
        <section className="projects">

        <div className="project tropem">
          <div>
            <h3>"Tropem naszego dziedzictwa" - przewodnik</h3>
            <p>„Tropem naszego dziedzictwa. Kąty Wrocławskie, Kobierzyce, Żórawina, Siechnice, Domaniów” - przewodnik po gminach leżących w sąsiedztwie lub tuż przy granicach Wrocławia.
</p><p>
Autorzy: tekst Marta Miniewicz, zdjęcia Zbigniew Sobierajski.<br />
PDF do pobrania, 96 stron, 12 MB.
</p><p>
Wydawnictwo współfinansowane jest ze środków UE w ramach realizacji projektu grantowego LGD Lider A4 pod nazwą "Dbamy o nasze dziedzictwo, w przestrzeni obszaru Lider A4 i działaniach mieszkańców!"
            </p>
                        <Link to="/tropem-naszego-dziedzictwa" className="link-button">Przejdź do projektu</Link>
          </div>
          </div>
          
        <div className="project dodaj">
          <div>
            <h3>"Od słowa do słowa"</h3>
            <p>„Od słowa do słowa” to projekt realizowany nas od 16 marca do 30 października 2020 roku w ramach programu Narodowego Centrum Kultury pn. „Ojczysty dodaj do ulubionych 2020”. Chcemy zwrócić uwagę na przestrzeń miejską jako nośnik wartości kulturowych, uwrażliwić na język mówiony i pisany, rozbudzić zainteresowanie językiem i literaturą polską.
            </p>
            <p>
W ramach zadania powstały tematyczne karty zadań oraz karta do gry miejskiej. Częścią praktyczna jest osiem wycieczek tematycznych.
            </p>
            <Link to="/od-slowa-do-slowa"  className="link-button">Przejdź do projektu</Link>
            </div>
          </div>

           <div className="project covid">
            <div>
            <h3>Odkryj to sam - edukacja regionalna w sieci</h3>
            <p>            
W ramach projektu „Covid-19” i zadania „Odkryj to sam - edukacja regionalna w sieci” przygotowanych zostało 8 multimedialnych kart aktywności dla dzieci i młodzieży oraz rodzin z dziećmi. Tematyczne karty rozwijają zainteresowania społeczności lokalnej Wrocławiem, jego dziedzictwem kulturowym oraz pogłębiają wiedzę o powiecie wrocławskim i regionie dolnośląskim.
</p>
            <p>
Zadanie „Odkryj to sam – edukacja regionalna w sieci” zostało sfinansowane ze środków otrzymanych z NIW-CRSO w ramach „Programu Wsparcia Doraźnego Organizacji Pozarządowych w Zakresie Przeciwdziałania Skutkom COVID-19".
</p>
            <p>
Projekt finansowany przez Narodowy Instytut Wolności. Centrum Rozwoju Społeczeństwa Obywatelskiego
            </p>
            <Link to="/odkryj-to-sam"  className="link-button">Przejdź do projektu</Link>
            </div>
          </div>

          <div className="project opowiem">
          <div>
            <h3>"Opowiem Ci o Wrocławiu"</h3>
            <p>W ramach projektu powstało sto krótkich historii inspirowanych detalem, miejscem i plenerem filmowym. Tematem postów było dziedzictwo kulturowe Wrocławia, jego zabytki, pomniki, muzea, artyści, wydarzenia z dawnej i powojennej historii miasta. Teksty do publikacji pojawiały się jako codzienne posty na fanpage'u Stowarzyszenia.
            </p>
           <Link to="opowiem-ci-o-wroclawiu"  className="link-button">Przejdź do projektu</Link>
          </div>
          </div>       
      
  
        </section>
       
</Layout>)
}

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   }
`;
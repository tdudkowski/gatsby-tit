import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>"Wrocław. Natura, sztuka i architektura. Trasa imienia Piotra Kasznickiego"</h2>
      </section>
      <section>
        <p>Przewodnik pt. Wrocław. Natura, sztuka i architektura jest efektem wspólnej pracy członków i sympatyków Stowarzyszenia Podróżników TUiTAM. Opisaną przez nas trasę dedykujemy Piotrowi Kasznickiemu (1967–2018), naszemu koledze, przyjacielowi, świetnemu przewodnikowi po Wrocławiu i znawcy świata roślin, o których potrafił fascynująco opowiadać.
        </p>
        <p>Trasę poprowadziliśmy przez Promenadę Staromiejską, którą Felicjan Faleński bardzo trafnie nazwał „kwiecistą Flory przepaską kapryśnie w zgiełk miejski rzuconą”. Od napisania tych słów przez romantycznego poetę minęło sto pięćdziesiąt lat, a Promenada Staromiejska wciąż zachwyca i jest miejscem wytchnienia od hałasu i zgiełku miasta.

        </p>
        <p>
          Podczas spaceru wzdłuż Odry i fosy miejskiej zobaczymy ciekawe gatunki drzew, w tym kilka okazałych pomników przyrody, zajrzymy do niezwykłego ogrodu w klasztornym wirydarzu, przejdziemy przez dwa parki (park Juliusza Słowackiego i park Staromiejski). Na trasie będziemy mogli podziwiać ciekawe pod względem architektonicznym obiekty (np. Muzeum Narodowe, Opera Wrocławska, synagoga Pod Białym Bocianem). W parkach i ogrodach lub na nadodrzańskim bulwarze zobaczymy prace wybitnych artystów, m.in. Magdaleny Abakanowicz, Stanisława Wysockiego, Theodora von Gosena. Jesteśmy przekonani, że stworzona i opisana przez nas trasa im. Piotra Kasznickiego, na której przyroda bywa nie tylko tłem dla dobrej architektury i sztuki, ale czasami podkreśla walory estetyczne budynków i dzieł sztuki, jest najlepszym sposobem upamiętnienia naszego Kolegi.
        </p>
        <ul>
          <li>tekst: Andrzej Borówka, Aldona Mikucka, Marta Miniewicz, Małgorzata Urlich-Kornacka, Magdalena Wąs</li>
          <li>zdjęcia panoramiczne: Leszek Sulich</li>
          <li>zdjęcia: Daniel Masica, archiwum Stowarzyszenia Podróżników TUiTAM</li>
          <li>pocztówki archiwalne ze zbiorów Małgorzaty Urlich-Kornackiej</li>
          <li>mapy © OpenStreetMap</li>
          <li>redakcja i korekta: Bogdan Bernacki</li>
          <li>korekta: Sonia Mozel</li>
          <li>skład i projekt graficzny: Adam Sobierajski</li>
        </ul>
      </section>

      <section className="cards">
        <a href="https://tdudkowski.usermd.net/files/tuitam/Wroclaw_przyroda_sztuka_architektura.pdf">
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="okładka przewodnika" />
          <div>ebook do pobrania<br />PDF 62 MB, 69 stron</div></a></section>

      <section>
        <hr />
        <p> </p>
        {/* <Img fluid={data.logo_tropem.childImageSharp.fluid} alt="logo projektu" width="484" className="project-logo" /> */}
        {/* <hr /> */}
      </section>
    </Layout>)
}

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "wroclaw-natura-sztuka-architektura-okladka200px.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo_tropem: file(relativePath: { eq: "logo-tropem-dziedzictwa.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;
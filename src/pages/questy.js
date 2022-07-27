import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const ZBiegiemRzeki = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Marta Miniewicz - Questy: Sobótka, Żórawina, Kąty Wrocławskie</h2>
      </section>
      <section className="imgandtxt column">
          <Img fixed={data.okladka.childImageSharp.fixed} className="contain" alt="questy okładki" />

        <div className="flexed_images">
            <p>Co to jest <strong>questing</strong>? Słowo quest pochodzi z języka angielskiego i znaczy "poszukiwanie". Questing to rodzaj gry terenowej, w której zwiedzanie połączone jest z zabawą. Waszym zadaniem będzie odkrycie hasła na podstawie rymowanych wskazówek. Wpiszcie odgadnięte, brakujące w tekście słowa, a oznaczone w nich litery w kratkach (liczby wskazują miejsce w haśle) dadzą wam rozwiązanie.</p>
            <p>Questy zostały przygotowane w ramach zadnia pt. "Sekrety i tajemnice, czyli odkrywca na tropie"  współfinansowanego ze środków Powiatu Wrocławskiego.</p>
         <h3>Sobótka</h3>

         <a href="https://tdudkowski.usermd.net/files/tuitam/01-quest-sobotka.pdf" className='downloadLink'>
          Quest Sobótka<br />(PDF do pobrania 6,4 MB)
          <Img fluid={data.sobotka.childImageSharp.fluid} className="cover" alt="Sobótka quest" />
        </a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/01-quest-sobotka_kartapracy.pdf" className='downloadLink'>
        Quest Sobótka - karta pracy<br />(PDF do pobrania 2,5 MB)
          <Img fluid={data.sobotkakp.childImageSharp.fluid} className="cover" alt="Sobótka quest - karta pracy" />
        </a>
         
         <h3>Żórawina</h3>

        <a href="https://tdudkowski.usermd.net/files/tuitam/02-quest-zorawina.pdf" className='downloadLink'>
        Quest Żórawina<br />(PDF do pobrania 10,2 MB)
          <Img fluid={data.zorawina.childImageSharp.fluid} className="cover" alt="Żórawina quest" />
        </a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/02-quest-zorawina_kartapracy.pdf" className='downloadLink'>
        Quest Żórawina - karta pracy<br />(PDF do pobrania 1,1 MB)
          <Img fluid={data.zorawinakp.childImageSharp.fluid} className="cover" alt="Żórawina quest - karta pracy" />
        </a>

         <h3>Kąty Wrocławskie</h3>

         <a href="https://tdudkowski.usermd.net/files/tuitam/03-quest-katywroclawskie.pdf" className='downloadLink'>
         Quest Kąty Wrocławskie<br />(PDF do pobrania 2,7 MB)
          <Img fluid={data.katywroclawskie.childImageSharp.fluid} className="cover" alt="Kąty Wrocławskie quest" />
        </a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/03-quest-katywroclawskie_kartapracy.pdf" className='downloadLink'>
        Quest Kąty Wrocławskie - karta pracy<br />(PDF do pobrania 1 MB)
          <Img fluid={data.katywroclawskiekp.childImageSharp.fluid} className="cover" alt="Kąty Wrocławskie quest - karta pracy" />
        </a>

        </div>
      </section>
    </Layout>)
}

export default ZBiegiemRzeki

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "questokladki-330.jpg" }) {
      id
      childImageSharp {
        fixed(width: 320, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    katywroclawskiekp: file(relativePath: { eq: "quest-katywroclawskie-kartapracy_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      katywroclawskie: file(relativePath: { eq: "quest-katywroclawskie_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      zorawinakp: file(relativePath: { eq: "quest-zorawina-kartapracy_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      zorawina: file(relativePath: { eq: "quest-zorawina_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sobotkakp: file(relativePath: { eq: "quest-sobotka-kartapracy_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sobotka: file(relativePath: { eq: "quest-sobotka_wynik.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`;

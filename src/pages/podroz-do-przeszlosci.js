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
        <h2>Marta Miniewicz, Karol Bykowski "Podróż do przeszłości. Powiat wrocławski na dawnych pocztówkach"</h2>
      </section>
      <section className="imgandtxt column">
        <a href="https://tdudkowski.usermd.net/files/tuitam/Podroz_do_przeszlosci.pdf" className='downloadLink'>
          Ebook do pobrania (PDF 10 MB)
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="program koncertu" />
        </a>
        <div>
          <p>To kolejne wydawnictwo Stowarzyszenia TUITAM, które poświęcone jest historii miasteczek i wsi powiatu wrocławskiego. Karty pocztowe to jedno z ważnych źródłem, dzięki któremu możemy poznać dawną historię naszego regionu.</p>
          <p>Pocztówki były powszechną formą przekazywania różnorodnych informacji w końcu XIX i w pierwszych dziesięcioleciach XX wieku. Widoki na nich prezentowane dają nam możliwość poznania zabudowy poszczególnych miejscowości, wyglądu często już nieistniejących obiektów (pałaców, dworów, kościołów, fabryk), ich wnętrz (np. gospód) oraz przejawów życia codziennego (różne uroczystości).</p>
          <p>Prezentowane w wydawnictwie karty pocztowe to bardzo skromna część kolekcji Karola Bykowskiego.</p>
          <p>Wydawnictwo sfinansowane zostało ze środków Powiatu Wrocławskiego.</p>
        </div>
      </section>
    </Layout>)
}

export default ZBiegiemRzeki

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "podroz-do-przeszlosci-okladka-300px.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

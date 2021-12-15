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
                <h2>Z biegiem rzeki - o Odrze i jej dopływach</h2>
            </section>
            <section className="imgandtxt column">
                <a href="http://tdudkowski.usermd.net/files/tuitam/powodzianka-tmp.jpg">
                    <Img fluid={data.powodzianka.childImageSharp.fluid} className="cover" alt="program koncertu" />
                </a>
                <div>
                    <p>Odra, najważniejsza rzeka Dolnego Śląska oraz jej główne dopływy – Widawa, Oława, Ślęza, Bystrzyca i Nysa Kłodzka – stały się głównymi bohaterkami naszego projektu pt. Z biegiem rzeki – o Odrze i jej dopływach.</p>
                    <p>W ramach zadania powstało trzynaście tekstów dotyczących rzek, związanych z nimi legend, nietypowych miejsc, słynnych mostów oraz wybudowanych nad ich brzegami wspaniałych siedzib szlacheckich i arystokratycznych. Teksty ukazały się w 2021 roku na profilu fejsbukowym Stowarzyszenia TUiTAM. Powstał z nich atrakcyjny w formie bogato ilustrowany e-book, który ma zachęcić do aktywnego wypoczynku, organizacji wycieczek rowerowych, wypraw kajakarskich i pieszych wędrówek nad brzegami dolnośląskich rzek.</p>
                    <p>Mamy nadzieję, że piękne zdjęcia, informacje i ciekawostki krajoznawcze zawarte w e-booku rozbudzą w czytelnikach chęć poznawania zabytków znajdujących się w malowniczych rzecznych dolinach.</p>
                </div>
            </section>
        </Layout>)
}

export default ZBiegiemRzeki

export const pageQuery = graphql`
  query {
    powodzianka: file(relativePath: { eq: "powodzianka-tmp200px.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const FilmowaRozaWiatrow = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Filmowa róża wiatrów, czyli dolnośląski set jetting</h2>
      </section>
      <section className="imgandtxt">

        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-filmowa_roza_wiatrow_x800.jpg">
          <Img fluid={data.afisz.childImageSharp.fluid} className="cover" alt="afisz czerwiec" />
        </a>
        <div>
          <p>Z opublikowanych tekstów powstanie atrakcyjny w formie, bogato ilustrowany e-book pod roboczym tytułem „Filmowa róża wiatrów”, który będzie można bezpłatnie pobrać ze strony www.przewodnicy.org.</p>
          <p>Z miejsc opisanych w tekstach utworzone zostaną cztery filmowe trasy rowerowe: na północ, południe, wschód i zachód od Wrocławia. Do każdej z nich zaprojektowana zostanie mapka z zaznaczonymi miejscami z tekstów o filmach i serialach. To propozycja dla miłośników set jettingu, czyli turystyki filmowej z wszystkich grup społecznych i wiekowych. E-book będzie stanowił inspirację do indywidualnych filmowych wycieczek rowerowych dla mieszkańców Dolnego Śląska.</p>
          <p>Projekt <em>„Filmowa róża wiatrów, czyli dolnośląski set jetting”</em>, realizowany przez Stowarzyszenie Podróżników TUiTAM, został dofinansowany przez Urząd Marszałkowski Województwa Dolnośląskiego.</p>
        </div>
      </section>
    </Layout>)
}

export default FilmowaRozaWiatrow

export const pageQuery = graphql`
  query {
    afisz: file(relativePath: { eq: "afisz-filmowa_roza_wiatrow_x200.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

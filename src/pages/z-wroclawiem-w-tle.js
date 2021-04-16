import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const ZWroclawiemWTle = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Z Wrocławiem w tle</h2>
      </section>
      <section className="imgandtxt">
        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-z_wroclawiem_w_tle-maj.jpg">
          <Img fluid={data.afisz_maj.childImageSharp.fluid} className="cover" alt="afisz marzec" />
        </a>
        <div>
          <p>
            Wrocław jest bez wątpienia miastem literatury i ma się czym poszczycić. Nie przez przypadek został Światową Stolicą Książki UNESCO, a wiersz poety Tadeusza Różewicza stał się w 2016 roku oficjalnym hymnem i od tamtego czasu również oficjalną muzyczną wizytówką każdej kolejnej Światowej Stolicy Książki UNESCO. Liczne wydarzenia literackie skłoniły nas do przygotowania własnego projektu łączącego spotkania z autorami z tematycznymi wycieczkami i promocją niezwykłego miejsca na mapie Wrocławia – nowego Odra Centrum. Zapraszamy.
                </p>
          <p>Cykl poprowadzi: Małgorzata Urlich-Kornacka</p>
          <p>20-21 maja 2021</p>

          <a href="https://viawroclaw.com/">viawroclaw - Małgorzata Urlich-Kornacka</a>

        </div>
      </section>
      <section>

        <hr />
        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-z_wroclawiem_w_tle.jpg">
          <Img fluid={data.afisz_luty.childImageSharp.fluid} className="cover" alt="afisz luty" />
        </a>
      </section>
    </Layout >)
}

export const pageQuery = graphql`
  query {
    afisz_luty: file(relativePath: { eq: "afisz-z_wroclawiem_w_tle.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    afisz_maj: file(relativePath: { eq: "afisz-z_wroclawiem_w_tle-maj.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;

export default ZWroclawiemWTle
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
        <h2>Odkryj to sam - edukacja regionalna w sieci</h2>

      </section>
      <section>
        <p>W ramach projektu „Covid-19” i zadania „Odkryj to sam - edukacja regionalna w sieci” przygotowanych zostało 8 multimedialnych kart aktywności dla dzieci i młodzieży oraz rodzin z dziećmi. Tematyczne karty rozwijają zainteresowania społeczności lokalnej Wrocławiem, jego dziedzictwem kulturowym oraz pogłębiają wiedzę o powiecie wrocławskim i regionie dolnośląskim.</p>
        <p>Forma kart ma charakter multimedialny, zadania zawierają bowiem QR-cody do nagrań audio, filmików czy zadań wykonanych wcześniej przez przewodników ze Stowarzyszenia TUiTAM na platformach e-learningowych. Karty będą dostępne w formie plików PDF do bezpłatnego pobrania na naszej stronie.</p>
      </section>
      <section className="cards">
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_1.pdf"><Img fluid={data.karta01.childImageSharp.fluid} className="cover" alt="okładka karty 1" /><div>Karta 1 "Gdzie krasnal nie może, tam ciebie pośle!"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_2.pdf"><Img fluid={data.karta02.childImageSharp.fluid} className="cover" alt="okładka karty 2" /><div>Karta 2 "Gnomes hide, kids find them"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_3.pdf"><Img fluid={data.karta03.childImageSharp.fluid} className="cover" alt="okładka karty 3" /><div>Karta 3 "Lernt Deutsch und Breslau kennen"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_4.pdf"><Img fluid={data.karta04.childImageSharp.fluid} className="cover" alt="okładka karty 4" /><div>Karta 4 "Gotyk na dotyk!"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_5.pdf"><Img fluid={data.karta05.childImageSharp.fluid} className="cover" alt="okładka karty 5" /><div>Karta 5 "Miej oko na barocco!"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_6.pdf"><Img fluid={data.karta06.childImageSharp.fluid} className="cover" alt="okładka karty 6" /><div>Karta 6 "Na świdnickim rynku, czyli potwory, herosi, greccy bogowie i opiekunowie Świdnicy"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_7.pdf"><Img fluid={data.karta07.childImageSharp.fluid} className="cover" alt="okładka karty 7" /><div>Karta 7 "W krainie sowiogórskich tajemnic"</div></a>
        <a href="https://tdudkowski.usermd.net/files/tuitam/odkryj_to_sam_karta_zadan_8.pdf"><Img fluid={data.karta08.childImageSharp.fluid} className="cover" alt="okładka karty 8" /><div>Karta 8 "Wszyscy Święci balują w niebie"</div></a>

      </section>
      <section>
        <hr />
        <p>Zadanie „Odkryj to sam – edukacja regionalna w sieci” zostało sfinansowane ze środków otrzymanych z NIW-CRSO w ramach „Programu Wsparcia Doraźnego Organizacji Pozarządowych w Zakresie Przeciwdziałania Skutkom COVID-19".</p>
        <p>Projekt finansowany przez Narodowy Instytut Wolności. Centrum Rozwoju Społeczeństwa Obywatelskiego</p>
        <Img fluid={data.logo_niw_covid.childImageSharp.fluid} alt="logo projektu" width="484" className="project-logo" />
      </section>


    </Layout>)
}

export const pageQuery = graphql`
  query {
    logo_niw_covid: file(relativePath: { eq: "logo-niw-covid-vertical.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    karta01: file(relativePath: { eq: "odkryj-to-sam-karta01.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karta02: file(relativePath: { eq: "odkryj-to-sam-karta02.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta03: file(relativePath: { eq: "odkryj-to-sam-karta03.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta04: file(relativePath: { eq: "odkryj-to-sam-karta04.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta05: file(relativePath: { eq: "odkryj-to-sam-karta05.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta06: file(relativePath: { eq: "odkryj-to-sam-karta06.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta07: file(relativePath: { eq: "odkryj-to-sam-karta07.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      } karta08: file(relativePath: { eq: "odkryj-to-sam-karta08.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;

import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const KobietaImie = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>"Kobieta niejedno ma imię" Marta Miniewicz, Małgorzata Urlich-Kornacka</h2>
      </section>
      <section className="cards">

        <a href="https://tdudkowski.usermd.net/files/tuitam/Kobieta_niejedno_ma_imie.pdf">
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="ebook Kobieta niejedno ma imie - 6MB" />
          <div>Ebook do pobrania<br />PDF 6 MB, 38 stron</div>
        </a>

        <div>
<p>Teksty o ciekawych (a często mało znanych) postaciach kobiecych, m.in. o:</p>
    
    <ul>
    <li>Dorothei von Philipsborn - niezwykle zdolnej rzeźbiarce ze Strzelec Świdnickich,</li>
    <li>astronomce Marii Kunic, która jako pierwsza kobieta na świecie wydała drukiem swoje prace naukowe,</li>
    <li>Marii von Malzan - hrabiance, Niemce, odznaczonej medalem Sprawiedliwy wśród Narodów Świata,</li>
    <li>Agnes Sormie - aktorce z Wrocławia, która podbijała sceny Europy,</li>
    <li>Clarze Immerwahr-Haber, pierwszej kobiecie z tytułem doktora Uniwersytetu Wrocławskiego,</li>
    <li>Ilse Beckmann, która jako jedna z pierwszych kobiet w Europie brała udział w wyścigach samochodowych.</li>
    </ul>

    <p>E-book zawiera również dwa wywiady z artystkami rzeźbiarką - Ewą Rossano oraz artystką szkłą - Joanną Lamparską.</p>
<p>Zadanie współfinansowane ze środków Samorządu Województwa Dolnośląskiego</p>
        </div>
      </section>
    </Layout>)
}

export default KobietaImie

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "Kobieta_niejedno_ma_imie.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

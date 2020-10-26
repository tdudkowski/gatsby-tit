import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image";
import Video from "../components/video";
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Opowiem Ci o Wrocławiu</h2>
      </section>
      <section>
        <p>W ramach programu Narodowego Centrum Kultury pn. „Kultura w sieci” Stowarzyszenie Podróżników TUiTAM realizuje w okresie od 11.05.2020 do 30.10.2020 projekt „Opowiem Ci o Wrocławiu – historie, których nie słyszałeś”.</p>
        <p>W ramach projektu powstało sto krótkich historii inspirowanych detalem, miejscem i plenerem filmowym. Tematem postów będzie dziedzictwo kulturowe Wrocławia, jego zabytki, pomniki, muzea, artyści, wydarzenia z dawnej i powojennej historii miasta. Teksty do publikacji pojawiały się jako codzienne posty na fanpage'u Stowarzyszenia.</p>
        <p>Najciekawsze opowieści oraz te, które wzbudziły największe zainteresowanie czytelników, staną się rozdziałami e-booka i audiobooka oraz podstawą do scenariuszy krótkich filmów video.</p>
        <p>Multimedialna książka o Wrocławiu pt. "Opowiem ci o Wrocławiu – historie, których nie słyszałeś" będzie pierwszą tego typu publikacją o mieście łączącą różne formy przekazu (bogato ilustrowane teksty z nagraniami audio oraz filmami). Będzie to praca zbiorowa, stworzą ją przewodnicy ze Stowarzyszenia TUiTAM.</p>
      </section>
      <section className="videos">

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/wTPAmgN7GJQ" videoTitle='"EPlac Solny we Wrocławiu" [8:20]' /><div>"Plac Solny we Wrocławiu" Beata Wers [6:52]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/R-TD-4j6xi8" videoTitle='"Eugeniusz Get-Stankiewicz" Wojtek Zalewski [8:20]' /><div>"Eugeniusz Get-Stankiewicz" Wojtek Zalewski [8:20]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PTbDSRIygXw" videoTitle='"Literacki Wrocław" Marta Miniewicz [8:41]' /><div>"Literacki Wrocław" Marta Miniewicz [8:41]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/qfCalOs3dZY" videoTitle='"Tajemnice wrocławskiej ALMA MATER" Sebastian Bagiński [9:47]' /><div>"Tajemnice wrocławskiej ALMA MATER" Sebastian Bagiński [9:47]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/hmbsOU6FSV0" videoTitle='"Legendy Wrocławia" Marta Miniewicz [12:00]' /><div>"Legendy Wrocławia" Marta Miniewicz [12:00]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/gKcWURfLeLE" videoTitle='"Ołbin nieoczywisty" Tatiana Granowska-Florea [6:47]' /><div>"Ołbin nieoczywisty" Tatiana Granowska-Florea [6:47]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/qx89pUUkKJ0" videoTitle='"Wojciech Jarząbek i jego realizacje" Bogna Piter [8:20]' /><div>"Wojciech Jarząbek i jego realizacje" Bogna Piter [8:20]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/OV-BinWY4x0" videoTitle='"Sylwester Chęciński. Filmowy Wrocław" Małgorzata Urlich-Kornacka oraz Bogdan Bernacki [8:40]' /><div>"Sylwester Chęciński. Filmowy Wrocław" Małgorzata Urlich-Kornacka oraz Bogdan Bernacki [8:40]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/WvJ2aM4EyWg" videoTitle='"Wrocławskie NAJ, czyli śladami miejskich rekordów" Małgorzata Urlich-Kornacka [9:02]' /><div>"Wrocławskie NAJ, czyli śladami miejskich rekordów" Małgorzata Urlich-Kornacka [9:02]</div></div>

      </section>
      <section>
        <hr />
        <Img fluid={data.logo_opowiem.childImageSharp.fluid} alt="logo projektu" width="484" className="project-logo" /></section>
    </Layout>)
}

export const pageQuery = graphql`
  query {
     logo_opowiem: file(relativePath: { eq: "logo-opowiem-ci-o-wroclawiu-vertical.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;

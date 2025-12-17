import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "../components/video"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const Herbownik = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>"Opowieści ukryte w herbach" Marta Miniewicz</h2>
      </section>
      <section className="imgandtxt cards">

        <a href="https://tdudkowski.usermd.net/files/tuitam/Opowieści_ukryte_w_herbach.pdf">
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="ebook Opowieści ukryte w herbach - 13 MB" />
          <div>Ebook do pobrania<br />PDF 13 MB, 94 strony</div>
        </a>

        <div>
        <p>Opowieści ukryte w herbach to cykl tekstów autorstwa Marty Miniewicz dotyczących znanych szlacheckich rodów z Dolnego Śląska oraz związane z ich rodowymi herbami legendy.<br />
           Legendy herbowe to opowieści w dużej mierze fantastyczne, które wyjaśniają znaczenie poszczególnych elementów znajdujących się na tarczy i w klejnocie.</p>
        <p>Zadanie współfinansowane było przez Powiat Wrocławski.</p>
       <div className="videos">        
        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/-YLP0IHVWxo" videoTitle='Opowieści ukryte w herbach [13:00]' /><div>Opowieści ukryte w herbach [13:00]</div></div>
       </div>
        </div>
      </section>
    </Layout>)
}

export default Herbownik

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "Opowieści_ukryte_w_herbach-okladka.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

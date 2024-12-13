import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const Wedrownik = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>"Wędrownik po powiecie wrocławskim" Marta Miniewicz, Małgorzata Urlich-Kornacka</h2>
      </section>
      <section className="imgandtxt cards">

        <a href="https://tdudkowski.usermd.net/files/tuitam/Wedrownk_po_powiecie_wroclawskim.pdf">
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="ebook Wędrownik po powiecie wrocławskim - 27 MB" />
          <div>Ebook do pobrania<br />PDF 27 MB, 112 stron</div>
        </a>

        <div>
        <p>Teksty są wyborem z publikowanego na stronie Powiatu Wrocławskiego cyklu: "Wędrownik po powiecie wrocławskim - fakty, mity, osobliwości, tajemnice"</p>
        </div>
      </section>
    </Layout>)
}

export default Wedrownik

export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "Wedrownik-po-powiecie-wroclawskim.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

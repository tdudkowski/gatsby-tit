import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const Okno = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>"Okno na świat, czyli o podróżach po Dolnym Śląsku (nie tylko literackich)" Marta Miniewicz, Sonia Miniewicz, Małgorzata Urlich-Kornacka</h2>
      </section>
      <section className="imgandtxt cards">

        <a href="https://tdudkowski.usermd.net/files/tuitam/Podroze_po_Dolnym_Slasku.pdf">
          <Img fluid={data.okladka.childImageSharp.fluid} className="cover" alt="ebook Okno na świat, czyli o podróżach po Dolnym Śląsku - 10 MB" />
          <div>Ebook do pobrania<br />PDF 10 MB, 96 stron</div>
        </a>

        <div>
        <p>Zbiór tekstów, w których pokazujemy, jak i dokąd dawniej podróżowano oraz jakimi środkami transportu pokonywano często bardzo duże odległości.<br />
        Przytaczamy relacje z dolnośląskich podróży pisarzy, muzyków, działaczy społecznych i polityków zawarte w dziennikach, pamiętnikach i listach. Przenosimy się wraz z naszymi bohaterami do wieku XVIII i XIX, do kolaski, pocztowego omnibusa i "żelaznego smoka" . Pokazujemy, co było dawniej atrakcją, czym się zachwycano oraz jak zmieniły się miejsca, które opisywano.</p>
        <p>Zadanie współfinansowane ze środków Urzędu Marszałkowskiego Województwa Dolnośląskiego.</p>
        </div>
      </section>
    </Layout>)
}

export default Okno
export const pageQuery = graphql`
  query {
    okladka: file(relativePath: { eq: "Podroze_po_Dolnym_Slasku-okladka.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

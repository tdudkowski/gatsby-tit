import React from 'react'
import { graphql } from "gatsby"
import Video from "../components/video"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const ToDopieroHistoria = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>To dopiero historia! Herstorie z powiatu wrocławskiego - cykl 4 podcastów</h2>
        <p>Projekt współfinansowany ze środków powiatu wrocławskiego</p>
      </section>
      <section className="imgandtxt column">
     
        <div className="videos">
        
        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/-YLP0IHVWxo" videoTitle='Sobótka jest kobietą? Rozmowa z Eweliną Staniszewską, graficzką, malarką, właścicielką Ślężańskiego w Sobótce [11:39]' /><div>Sobótka jest kobietą? Rozmowa z Eweliną Staniszewską, graficzką, malarką, właścicielką Ślężańskiego w Sobótce [11:39]</div></div>
        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/X7ixBMW0Vvs" videoTitle='Sobótka jest kobietą? cz. II Rozmowa z Moniką Szimą-Efinowicz, dyrektorką Muzeum Ślężańskiego [15:06]' /><div>Sobótka jest kobietą? cz. II Rozmowa z Moniką Szimą-Efinowicz, dyrektorką Muzeum Ślężańskiego [15:06]</div></div>
        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/uH_Oon8KYTU" videoTitle='Kobiety mają moc! Rozmowa z Joanną Mostowską, podróżniczką, alpinistką, biegaczką długodystansową [16:12]' /><div>Kobiety mają moc! Rozmowa z Joanną Mostowską, podróżniczką, alpinistką, biegaczką długodystansową [16:12]</div></div>
        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/9qqcJ2mWPI0" videoTitle='Gdy się zerwie kwiat paproci... - rozmowa o niezwykłych kobietach (królowej Karoli, poetce Elisabeth von Senitz, fundatorce kaplicy Świętych Schodów Josephinie Würtz und Burg oraz kolekcjonerce Barbarze Piaseckiej-Johnson) [15:25]' /><div>Gdy się zerwie kwiat paproci... - rozmowa o niezwykłych kobietach (królowej Karoli, poetce Elisabeth von Senitz, fundatorce kaplicy Świętych Schodów Josephinie Würtz und Burg oraz kolekcjonerce Barbarze Piaseckiej-Johnson) [15:25]</div></div>



        </div>
      </section>
    </Layout>)
}

export default ToDopieroHistoria

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

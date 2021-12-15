import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Banner from "../components/header-banner"
import Video from "../components/video"

const ZWroclawiemWTle = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Z Wrocławiem w tle</h2>
      </section>
      <section className="imgandtxt">
        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-zwrowtle4-640x960.jpg">
          <Img fluid={data.afisz_lipiec.childImageSharp.fluid} className="cover" alt="afisz czerwiec" />
        </a>
        <div>
          <p>Wrocław jest bez wątpienia miastem literatury. Nie przez przypadek został w 2016 roku Europejską Stolicą Kultury i Światową Stolicą Książki UNESCO, a od 2019 roku nosi zaszczytny tytuł Miasta Literatury UNESCO. Z Wrocławiem związani są laureaci Nagrody Nobla w dziedzinie literatury (Theodor Mommsen – 1902, Gerhart Hauptmann – 1912, Olga Tokarczuk – 2019) oraz znani i cenieni poeci (m.in. Tadeusz Różewicz, Rafał Wojaczek, Roman Kołakowski). Wiersz Tadeusza Różewicza pt. „Włosek poety” z muzyką Jana Kantego Pawluśkiewicza stał się w 2017 roku oficjalnym hymnem Światowej Stolicy Książki UNESCO. Bogate literackie dziedzictwo Wrocławia, liczne wydarzenia literackie oraz ciekawi autorzy, dla których Wrocław jest inspiracją w ich codziennej pracy, skłoniły nas do przygotowania własnego projektu łączącego literackie spotkania z tematycznymi wycieczkami oraz filmami promującymi niezwykłe miejsce na mapie Polski, jakim jest Wrocław. Zapraszamy do ich obejrzenia!</p>

          <p>W ramach cyklu „Z Wrocławiem w tle” odbyły się spotkania z pisarkami Nadią Szagdaj, Malwiną Ferenz i Jolantą Kaletą oraz poetką Ewą Sonnenberg. Ponadto zostały zorganizowane tematyczne spacery: „Kryminalny Wrocław kobiecym okiem” –  na podstawie kryminałów Nadii Szagdaj, „Wrocław z dreszczykiem – na podstawie powieści, legend, historii autentycznych”, „Złoto Wrocławia. Między faktami a fikcją literacką” – na podstawie powieści Jolanty Marii kalety oraz „Wierszem po wodzie pisane – Wrocław oczami poetów”. W Odra Centrum znajdą Państwo sygnowane przez autorów książki i tomiki wierszy – zostały tam przekazane przez Małgorzatę Urlich-Kornacką, inicjatorkę cyklu i przewodniczkę ze Stowarzyszenia Podróżników TUiTAM . Zapraszamy do Wrocławia na wędrówkę literackim szlakiem!</p>

          <p>Cykl poprowadziła Małgorzata Urlich-Kornacka</p>

          <a href="https://viawroclaw.com/">viawroclaw - Małgorzata Urlich-Kornacka</a>

          {/* <p>Wrocław jest bez wątpienia miastem literatury i ma się czym poszczycić. Nie przez przypadek został Światową Stolicą Książki UNESCO, a wiersz poety Tadeusza Różewicza stał się w 2016 roku oficjalnym hymnem i od tamtego czasu również oficjalną muzyczną wizytówką każdej kolejnej Światowej Stolicy Książki UNESCO. Liczne wydarzenia literackie skłoniły nas do przygotowania własnego projektu łączącego spotkania z autorami z tematycznymi wycieczkami i promocją niezwykłego miejsca na mapie Wrocławia – nowego Odra Centrum. Zapraszamy.</p> */}
          <section className="videos">
            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/Wfz4xaZrpuY" videoTitle='"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]' /><div>"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/oYJIqdKD1wI" videoTitle='"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]' /><div>"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]<br />
              (luty 2021)</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PYpKGcrwpIc" videoTitle='"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]' /><div>"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PA27QdiequQ" videoTitle='"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle" [58:12]' /><div>"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle"" [58:12]<br />
              (marzec 2021)</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/QTtAjLO0vK0" videoTitle='"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]' /><div>"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/J1jnpgsApe4" videoTitle='"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]' /><div>"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]<br />
              (czerwiec 2021)</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/4Kl-4AVBCQ4" videoTitle='"Z Wrocławiem w tle - śladami poetów" - Spacer śladami wrocławskich poetów – jubileusz Ewy Sonnenberg [15:01]' /><div>"Z Wrocławiem w tle - śladami poetów" - Spacer śladami wrocławskich poetów – jubileusz Ewy Sonnenberg [15:01]<br />
              (lipiec 2021)</div></div>
          </section>
        </div>

      </section>

      <section className="flexrow">

        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-zwrowtle-czerwiec_x641.jpg">
          <Img fluid={data.afisz_czerwiec.childImageSharp.fluid} className="cover" alt="afisz czerwiec" />
        </a>

        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-z_wroclawiem_w_tle-maj.jpg">
          <Img fluid={data.afisz_maj.childImageSharp.fluid} className="cover" alt="afisz marzec" />
        </a>

        <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-z_wroclawiem_w_tle.jpg">
          <Img fluid={data.afisz_luty.childImageSharp.fluid} className="cover" alt="afisz luty" />
        </a>
      </section>
    </Layout >)
}

export default ZWroclawiemWTle

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
      afisz_czerwiec: file(relativePath: { eq: "afisz-zwrowtle_czerwiec_x960.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      afisz_lipiec: file(relativePath: { eq: "afisz-zwrowtle4-640x960.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;


import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const MuzycznyWroclaw = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Muzyczny Wrocław</h2>
      </section>
      <section className="imgandtxt column">

        <a href="http://tdudkowski.usermd.net/files/tuitam/Muzyczny_Wroclaw_koncert.jpg">
          <Img fluid={data.program.childImageSharp.fluid} className="cover" alt="program koncertu" />
        </a>
        {/* <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-muzyczny_wroclaw_x800.jpg">
          <Img fluid={data.afisz.childImageSharp.fluid} className="cover" alt="afisz czerwiec" />
        </a> */}

        <div>
          <p>Rok 2021 obfitował w muzyczne jubileusze.</p>
          <p>Dokładnie 195 lat temu do Wrocławia i na Dolny Śląsk przyjechał po raz pierwszy młody Fryderyk Chopin. Będąc w stolicy Dolnego Śląska, odwiedził Friedricha Wilhelma Bernera – organistę w kościele pw. św. Elżbiety, gdzie usłyszał dźwięk organów Englera, a także kapelmistrza Josepha Ignaza Schnabla z katedry wrocławskiej.</p>
          <p>W tym roku minęło też 130 lat od pierwszego koncertu Ignacego Jana Paderewskiego we Wrocławiu oraz 80 lat od jego śmierci.</p>
          <p>Dokładnie 140 lat temu, 4 stycznia 1881 roku, w Wielkiej Sali Wrocławskiego Domu Koncertowego odbyło się prawykonanie „Uwertury akademickiej c-moll op. 80” pod batutą Johannesa Brahmsa. Kompozytor skomponował ją jako podziękowanie dla Uniwersytetu Wrocławskiego za otrzymany tytuł doktora honoris causa.</p>
          <p>W grudniu 2021 roku upłynęło 160 lat od śmierci polskiego skrzypka, kompozytora i pedagoga Karola Józefa Lipińskiego, patrona wrocławskiej Akademii Muzycznej.</p>
          <p>O tych i innych rocznicach i wydarzeniach muzycznych mogli Państwo usłyszeć podczas wycieczek przygotowanych i poprowadzonych przez Katarzynę Srokę oraz Małgorzatę Urlich-Kornacką. W czasie każdej wycieczki na jej uczestników czekała muzyczna niespodzianka: młodzi artyści z Akademii Muzycznej im. Karola Lipińskiego oraz Ogólnokształcącej Szkoły Muzycznej I i II stopnia im. Karola Szymanowskiego we Wrocławiu uświetnili opowieści przewodnickie swoimi występami. Muzycy zagrali na flecie, akordeonie, saksofonie, skrzypcach oraz klarnecie. Usłyszeliśmy gitarę i wspólnie zaśpiewaliśmy chyba najbardziej wrocławską piosenkę Marii Koterbskiej „Mkną po szynach niebieskie tramwaje”, a studenci Akademii Muzycznej podczas jednego ze spacerów zaśpiewali wraz z młodym tenorem kołysankę Johannesa Brahmsa pt.: „Guten Abend, gut’ Nacht.“</p>
          <p>Zwieńczeniem działań był koncert pt. „Muzyczny Wrocław na przestrzeni wieków – saksofon i nie tylko…”, który odbył się w ramach Europejskiego Forum Saksofonowego na Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu oraz skomponowanie muzycznej wizytówki Stowarzyszenia TUiTAM. Bardzo dziękujemy wszystkim osobom, które się zaangażowały w projekt „Muzyczny Wrocław”: młodym artystom, którzy zagrali podczas wycieczek i wszystkim uczestnikom za ich obecność na wycieczkach.</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=utDCiciEvig">Koncert „Muzyczny Wrocław na przestrzeni wieków – saksofon i nie tylko…”</a> na Akademii Muzycznej im. Karola Lipińskiego we Wrocławiu</li>
            <li><a href="https://youtu.be/I6FYixLl5go">Muzyczna wizytówka Stowarzyszenia TUiTAM</a></li>
            <li><a href="https://youtu.be/EX84VUu1zxA">Dżingiel Stowarzyszenia TUiTAM</a></li>
          </ul>
          <p>Projekt „Muzyczny Wrocław" został dofinansowany przez Urząd Marszałkowski Województwa Dolnośląskiego.</p>

          {/* <p>Rok 2021 obfituje w muzyczne jubileusze.</p>
          <p>Dokładnie 195 lat temu do Wrocławia i na Dolny Śląsk przyjechał po raz pierwszy młody Fryderyk Chopin. Będąc w stolicy Dolnego Śląska, odwiedził Friedricha W. Bernera – organistę w kościele pw. św. Elżbiety, gdzie usłyszał dźwięk organów Englera (obecnie w odbudowie), a także kapelmistrza Josepha I. Schnabla z katedry wrocławskiej.</p>
          <p>W tym roku mija też 130 lat od pierwszego koncertu Ignacego Jana Paderewskiego we Wrocławiu, a 29.06.2021 roku przypadnie 80. rocznica jego śmierci.</p>
          <p>Dokładnie 140 lat temu, 4 stycznia 1881 roku, w Wielkiej Sali Wrocławskiego Domu Koncertowego odbyło się prawykonanie „Uwertury akademickiej c-moll op. 80” pod batutą Johannesa Brahmsa. Kompozytor skomponował ją jako podziękowanie dla Uniwersytetu Wrocławskiego za otrzymany tytuł doktora honoris causa. W tym roku obchodzić też będziemy 235. rocznicę urodzin kompozytora Carla Marii Webera – autora pierwszej niemieckiej opery romantycznej „Wolny strzelec”. Jej kompozytor przez dwa lata był dyrektorem wrocławskiego teatru „Kalte Asche” (poprzednika obecnej Opery Wrocławskiej).</p>
          <p>W grudniu br. upłynie 160 lat od śmierci polskiego skrzypka, kompozytora i pedagoga Karola Józefa Lipińskiego, patrona wrocławskiej Akademii Muzycznej. O tych i innych rocznicach i wydarzeniach muzycznych usłyszą Państwo podczas wycieczek oraz moderowanego koncertu na Akademii Muzycznej. Zapraszamy!</p>
          <p>Projekt „Muzyczny Wrocław" został dofinansowany przez Urząd Marszałkowski Województwa Dolnośląskiego.</p> */}
        </div>
      </section>
    </Layout>)
}

export default MuzycznyWroclaw

export const pageQuery = graphql`
  query {
    afisz: file(relativePath: { eq: "afisz-muzyczny_wroclaw_x800.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    program: file(relativePath: { eq: "Muzyczny_Wroclaw_koncert.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

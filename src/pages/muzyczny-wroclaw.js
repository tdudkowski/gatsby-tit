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
            <section className="imgandtxt">
                <a href="http://tdudkowski.usermd.net/files/tuitam/afisz-muzyczny_wroclaw_x800.jpg">
                    <Img fluid={data.afisz.childImageSharp.fluid} className="cover" alt="afisz czerwiec" />
                </a>
                <div>
                    <>Rok 2021 obfituje w muzyczne jubileusze.</>
                    <p>Dokładnie 195 lat temu do Wrocławia i na Dolny Śląsk przyjechał po raz pierwszy młody Fryderyk Chopin. Będąc w stolicy Dolnego Śląska, odwiedził Friedricha W. Bernera – organistę w kościele pw. św. Elżbiety, gdzie usłyszał dźwięk organów Englera (obecnie w odbudowie), a także kapelmistrza Josepha I. Schnabla z katedry wrocławskiej.</p>
                    <p>W tym roku mija też 130 lat od pierwszego koncertu Ignacego Jana Paderewskiego we Wrocławiu, a 29.06.2021 roku przypadnie 80. rocznica jego śmierci.</p>
                    <p>Dokładnie 140 lat temu, 4 stycznia 1881 roku, w Wielkiej Sali Wrocławskiego Domu Koncertowego odbyło się prawykonanie „Uwertury akademickiej c-moll op. 80” pod batutą Johannesa Brahmsa. Kompozytor skomponował ją jako podziękowanie dla Uniwersytetu Wrocławskiego za otrzymany tytuł doktora honoris causa. W tym roku obchodzić też będziemy 235. rocznicę urodzin kompozytora Carla Marii Webera – autora pierwszej niemieckiej opery romantycznej „Wolny strzelec”. Jej kompozytor przez dwa lata był dyrektorem wrocławskiego teatru „Kalte Asche” (poprzednika obecnej Opery Wrocławskiej).</p>
                    <p>W grudniu br. upłynie 160 lat od śmierci polskiego skrzypka, kompozytora i pedagoga Karola Józefa Lipińskiego, patrona wrocławskiej Akademii Muzycznej. O tych i innych rocznicach i wydarzeniach muzycznych usłyszą Państwo podczas wycieczek oraz moderowanego koncertu na Akademii Muzycznej. Zapraszamy!</p>
                    <p>Projekt „Muzyczny Wrocław" został dofinansowany przez Urząd Marszałkowski Województwa Dolnośląskiego.</p>
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
    }
`;

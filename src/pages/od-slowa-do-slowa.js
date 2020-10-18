import React from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({data}) => {
    // console.log(data)
return (
<Layout>
<Banner />
<section>
<h2>Od słowa do słowa</h2>
</section>
<section>
    <p>„Od słowa do słowa” to projekt realizowany przez Stowarzyszenie TUITAM od 16 marca do 30 października 2020 roku w ramach programu Narodowego Centrum Kultury pn. „Ojczysty dodaj do ulubionych 2020”.</p>
    <p>Podczas realizacji projektu chcemy zwrócić uwagę na przestrzeń miejską jako nośnik wartości kulturowych, uwrażliwić na język mówiony i pisany, rozbudzić zainteresowanie językiem i literaturą polską. W ramach zadania opracowaliśmy tematyczne karty zadań oraz kartę do gry miejskiej. Częścią praktyczna projektu jest osiem wycieczek tematycznych. Podczas spacerów z przewodnikami uczestnicy, odkrywając Wrocław, jego zabytki i architekturę, poznają historie biblijne, mity, baśnie i legendy, motywy literackie związane z miastem oraz sylwetki pisarzy tworzących we Wrocławiu i piszących o naszym mieście.</p>
    <p>Do tego dwie gry miejskie, gra towarzyska – quiz pt. „Od słowa do słowa, czyli zapytaj mnie o Wrocław” oraz zestaw pocztówek z cytatami z dzieł pisarzy związanych z miastem.</p>
    <p>Informacje o datach wycieczek i gier miejskich umieszczamy na fanpage'u Tuitam: <a href="https://www.facebook.com/stowarzyszenieTUiTAM/">facebook.com/stowarzyszenieTUiTAM</a> </p>
</section>
<section className="cards">
<a href="/#1"><Img fluid={data.karta1_okladka.childImageSharp.fluid} className="cover" alt="okładka karty 1" /><div>Karta pracy 1 "Od Adama i Ewy" (2 strony, 5 zadań)</div></a>
<a href="/#1"><Img fluid={data.karta2_okladka.childImageSharp.fluid} className="cover" alt="okładka karty 2" /><div>Karta pracy 2 "Po kocich ścieżkach w mieście" (2 strony, 5 zadań)</div></a>
<a href="/#1"><Img fluid={data.karta3_okladka.childImageSharp.fluid} className="cover" alt="okładka karty 3" /><div>Karta pracy 3 "Mitologia w małym palcu" (2 strony, 7 zadań)</div></a>
<a href="/#1"><Img fluid={data.karta4_okladka.childImageSharp.fluid} className="cover" alt="okładka karty 4" /><div>Karta pracy 4 "Znam wrocławskich legend wiele" (2 strony, 6 zadań)</div></a>
<a href="/#1"><Img fluid={data.karta5_okladka.childImageSharp.fluid} className="cover" alt="okładka karty 5" /><div>Karta pracy 5 "Od słowa do słowa gra miejska po Wrocławiu" (4 strony, 33 zadania)</div></a>

</section>
       <section><hr/>
       <Img fluid={data.od_slowa_do_slowa_logo.childImageSharp.fluid}  alt="logo projektu" width="484" className="project-logo" />
       </section>
</Layout>)
}

export const pageQuery = graphql`
  query {
    od_slowa_do_slowa_logo: file(relativePath: { eq: "od-slowa-do-slowa-logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    karta1_okladka: file(relativePath: { eq: "od-slowa-do-slowa-okladka_karta1.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karta2_okladka: file(relativePath: { eq: "od-slowa-do-slowa-okladka_karta2.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karta3_okladka: file(relativePath: { eq: "od-slowa-do-slowa-okladka_karta3.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karta4_okladka: file(relativePath: { eq: "od-slowa-do-slowa-okladka_karta4.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karta5_okladka: file(relativePath: { eq: "od-slowa-do-slowa-okladka_karta5.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 484) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;

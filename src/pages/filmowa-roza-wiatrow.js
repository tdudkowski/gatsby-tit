import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

const FilmowaRozaWiatrow = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Filmowa róża wiatrów, czyli dolnośląski set jetting</h2>
      </section>
      <section className="imgandtxt">

        <a href="http://tdudkowski.usermd.net/files/tuitam/filmowa_roza_wiatrow_ebook.pdf" className='downloadLink'>
          <p>Pobierz e-book "Filmowa róża wiatrów"<br />
            (PDF 30 MB)</p>
          <Img fluid={data.cover.childImageSharp.fluid} className="cover" alt="Okładka książki" />
        </a>
        <div>
          <p>Zapraszamy na wędrówkę śladami plenerów bardziej lub mniej znanych filmów i seriali, które powstały na obrzeżach Wrocławia oraz w miejscowościach położonych wokół stolicy Dolnego Śląska. Materiały te po raz pierwszy ukazały się wiosną i latem 2021 roku na profilu fejsbukowym Filmowy Wrocław (https://www.facebook.com/filmwroclaw/) w ramach projektu Filmowa róża wiatrów, który zrealizowało Stowarzyszenie Podróżników TUiTAM, a dofinansował Urząd Marszałkowski Województwa Dolnośląskiego. Od dłuższego czasu z pasją i zaangażowaniem odkrywamy i przybliżajmy plenery i obiekty uwiecznione w filmach i serialach. W ten sposób ocalamy je od zapomnienia i propagujemy set jetting, czyli turystykę filmową, która zyskuje coraz więcej zwolenników w naszym kraju. Ileż emocji dostarczyć może dotarcie do miejsc akcji filmów czy seriali, poszukiwanie panującej w nich atmosfery, określonego klimatu czy zwiedzanie obiektów znanych z ekranu!</p>
          <p>Miejsca opisane w naszych tekstach układają się w cztery filmowe trasy rowerowe: na północ, wschód, południe i zachód od Wrocławia. Każdą z nich zaczynamy w filmowym zakątku stolicy Dolnego Śląska. Ich przebieg ukazują mapki z zaznaczonymi plenerami i obiektami filmowymi. Za nieocenioną pomoc i liczne podpowiedzi dziękujemy reżyserom Waldemarowi Krzystkowi, Zygmuntowi Lechowi i Radosławowi Piwowarskiemu oraz scenografkom Barbarze Komosińskiej i Danucie Węgrzyn-Kopczyńskiej. Szczególne podziękowania składamy asystentowi reżysera Ryszardowi Szymonowi i asystentowi operatora Stefanowi Kurzypowi za filmowe opowieści i udostępnienie zdjęć z filmowych planów. Ponadto dziękujemy za życzliwość Markowi Łazarzowi, Magdalenie Klag, Danucie Rajczakowskiej i Januszowi Kozyrskiemu.</p>
          <p>Zachęcamy do wyruszenia na indywidualne wycieczki rowerowe wytyczonymi przez nas trasami. Jest to wyzwanie dla miłośników set jettingu ze wszystkich grup społecznych i wiekowych. Mamy nadzieję, że wyprawy te będą źródłem satysfakcji i niezapomnianych wrażeń. Życzymy wiatru w plecy!</p>

          {/* <p>Z opublikowanych tekstów powstanie atrakcyjny w formie, bogato ilustrowany e-book pod roboczym tytułem „Filmowa róża wiatrów”, który będzie można bezpłatnie pobrać ze strony www.przewodnicy.org.</p>
          <p>Z miejsc opisanych w tekstach utworzone zostaną cztery filmowe trasy rowerowe: na północ, południe, wschód i zachód od Wrocławia. Do każdej z nich zaprojektowana zostanie mapka z zaznaczonymi miejscami z tekstów o filmach i serialach. To propozycja dla miłośników set jettingu, czyli turystyki filmowej z wszystkich grup społecznych i wiekowych. E-book będzie stanowił inspirację do indywidualnych filmowych wycieczek rowerowych dla mieszkańców Dolnego Śląska.</p>
          <p>Projekt <em>„Filmowa róża wiatrów, czyli dolnośląski set jetting”</em>, realizowany przez Stowarzyszenie Podróżników TUiTAM, został dofinansowany przez Urząd Marszałkowski Województwa Dolnośląskiego.</p> */}
        </div>
      </section>
    </Layout>)
}

export default FilmowaRozaWiatrow

export const pageQuery = graphql`
  query {
    afisz: file(relativePath: { eq: "afisz-filmowa_roza_wiatrow_x200.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cover: file(relativePath: { eq: "Filmowa_roza_wiatrow-okladka-200px.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
`;

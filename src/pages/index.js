import React from 'react'
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout"
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandPointRight
} from '@fortawesome/free-regular-svg-icons'

export default ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <section className="hero">
        <div>
          <div>
            <p>Szukasz przewodnika lub pilota?</p>
            <Link to="/przewodnicy" className="link-button">Nasi przewodnicy</Link>
          </div>
          <div>
            <p>Co robi nasze Stowarzyszenie</p>
            <Link to="/dzialalnosc" className="link-button">Działalność</Link>
          </div>
          <div>
            <p>Chcesz zorganizować wycieczkę?</p>
            <Link to="/kontakt" className="link-button">Wyślij wiadomość</Link>
          </div>
        </div>
      </section>
      <section className="fb-info">
        <div className="mission">

          <Img fluid={data.logo.childImageSharp.fluid} className="logo" />
          <h3>Stowarzyszenie TUiTAM</h3>
          <p>
            Celem naszego Stowarzyszenia jest propagowanie wiedzy o Wrocławiu
            i Dolnym Śląsku. Nasi przewodnicy oferują usługi przewodnickie po
            Wrocławiu, okolicach Wrocławia oraz Dolnym Śląsku dla grup
            zorganizowanych i indywidualnych turystów.
          </p>
          <p>Na naszej stronie:</p>

          <ul>
            <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
              dowiesz się o formach naszej działalności, o tym, jakie
              realizujemy projekty
            </li>
            <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
              możesz zamówić przewodnika i wybrać trasę wycieczki
            </li>
            <li><FontAwesomeIcon icon={faHandPointRight} size="1x" className="fa-glif" />
              poczytasz o Wrocławiu i o Dolnym Śląsku (już wkrótce).</li>
          </ul>
        </div>

        <div className="facebook">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FstowarzyszenieTUiTAM%2F&tabs=timeline&width=540&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="facebook-iframe"
            width="540"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>
      <section className="projects">
        <h2>Aktualności</h2>

        <div className="project herstoriapodkasty y24">
          <div>
            <h3>To dopiero historia! Herstorie z powiatu wrocławskiego - cykl 4 podcastów</h3>
            <p>Projekt współfinansowany ze środków powiatu wrocławskiego.</p>
            <Link to="/to-dopiero-historia" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project kobietaimie y24">
          <div>
            <h3>"Kobieta niejedno ma imię" Marta Miniewicz, Małgorzata Urlich-Kornacka</h3>
            <p>Teksty o ciekawych (a często mało znanych) postaciach kobiecych...</p>
            <p>Zadanie współfinansowane ze środków Samorządu Województwa Dolnośląskiego.</p>
            <Link to="/kobieta-niejedno-ma-imie" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project wedrownik y23">
          <div>
            <h3>"Wędrownik po powiecie wrocławskim" Marta Miniewicz, Małgorzata Urlich-Kornacka</h3>
            <p>Teksty są wyborem z publikowanego na stronie Powiatu Wrocławskiego cyklu: "Wędrownik po powiecie wrocławskim - fakty, mity, osobliwości, tajemnice"</p>
            <Link to="/wedrownik-po-powiecie-wroclawskim" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project quests y22">
          <div>
            <h3>Marta Miniewicz<br />Questy: Sobótka, Żórawina, Kąty Wrocławskie</h3>
            <p>Questing: gra terenowa połączona z zabawą, nauka przez rozwiązywanie zagadek.</p>
            <Link to="/questy" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project podrozdoprzeszlosci y21">
          <div>
            <h3>Marta Miniewicz, Karol Bykowski<br />"Podróż do przeszłości. Powiat wrocławski na dawnych pocztówkach"</h3>
            <p>To kolejne wydawnictwo Stowarzyszenia TUITAM, które poświęcone jest historii miasteczek i wsi powiatu wrocławskiego.
            </p>
            <Link to="/podroz-do-przeszlosci" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project zbiegiemrzeki y21">
          <div>
            <h3>Z biegiem rzeki - o Odrze i jej dopływach</h3>
            <p>Odra, najważniejsza rzeka Dolnego Śląska oraz jej główne dopływy – Widawa, Oława, Ślęza, Bystrzyca i Nysa Kłodzka – stały się głównymi bohaterkami naszego projektu pt. Z biegiem rzeki – o Odrze i jej dopływach.<br /><br /><br />
            </p>
            <Link to="/z-biegiem-rzeki" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project filmowarozawiatrow y21">
          <div>
            <h3>Filmowa róża wiatrów, czyli dolnośląski set jetting</h3>
            <p>To propozycja dla miłośników turystyki filmowej i zwolenników aktywnego spędzenia czasu wolnego. W ramach projektu powstało szesnaście tekstów dotyczących Wrocławia oraz miejscowości wokół stolicy Dolnego Śląska (miast, wiosek i innych przestrzeni), które stały się plenerami znanych i mniej znanych filmów i seriali. Teksty te ukazywały się regularnie na fejsbukowym profilu „Filmowy Wrocław” i udostępniane były na stronach Stowarzyszenia TUiTAM. Powstał z nich atrakcyjny w formie e-book, który zachęca do rowerowego set jettingu, czyli wypraw do plenerów filmowych na dwóch kółkach.
            </p>
            <Link to="/filmowa-roza-wiatrow" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project muzycznywroclaw y21">
          <div>
            <h3>Muzyczny Wrocław</h3>
            <p>W ramach projektu zaprosiliśmy wrocławian na sześć tematycznych spacerów po mieście, którym towarzyszyła muzyczna niespodzianka w wykonaniu młodych artystów z Akademii Muzycznej im. Karola Lipińskiego oraz absolwentów Ogólnokształcącej Szkoły Muzycznej I i II stopnia im. Karola Szymanowskiego we Wrocławiu. Zaś podsumowaniem projektu był koncert „Muzyczny Wrocław na przestrzeni wieków – saksofon i nie tylko…”, który urozmaicony został historiami i anegdotami ze świata muzycznego Wrocławia. Była to doskonała okazja do poznania talentu młodych artystów oraz bogactwa muzycznego stolicy Dolnego Śląska. Dla potrzeb projektu została skomponowana muzyczna wizytówka Stowarzyszenia Podróżników TUiTAM.</p>
            {/* <p>Projekt obejmujący tematyczne spacery po Wrocławiu, którym towarzyszyć będzie muzyczna niespodzianka oraz koncert na Akademii Muzycznej im. Karola Józefa Lipińskiego. Będzie to doskonała okazja do poznania talentu młodych artystów oraz bogactwa muzycznego stolicy Dolnego Śląska. Cały koncert będzie moderowany i urozmaicony historiami i anegdotami ze świata muzycznego Wrocławia. Dla potrzeb projektu zostanie skomponowana muzyczna wizytówka Stowarzyszenia Podróżników TUiTAM.</p> */}
            <Link to="/muzyczny-wroclaw" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project zwroclawiemwtle y21">
          <div>
            <h3>"Z Wrocławiem w tle"</h3>
            <p>To cykl literacki zainicjowany przez Stowarzyszenie Podróżników TUiTAM a zrealizowany we współpracy z Wrocławskim Domem Literatury, Wydziałem Promocji Miasta i Turystyki Urzędu Miejskiego Wrocławia oraz Odra Centrum. W ramach projektu zaprosiliśmy wrocławian zainteresowanych literaturą i historią stolicy Dolnego Śląska na cykl czterech spotkań z autorkami mieszkającymi, tworzącymi lub piszącymi o Wrocławiu oraz cykl czterech tematycznych spacerów literackich śladami bohaterów ich powieści. Ich bohaterkami były wrocławskie pisarki Nadia Szagdaj, Malwina Ferenz i Jolanta Kaleta oraz poetka Ewa Sonnenberg. Podsumowaniem spotkań i wycieczek są autorskie filmy zrealizowane przez Małgorzatę Urlich-Kornacką i Marcina Załuckiego. Można w nich zobaczyć miejsca związane z wybranymi dziełami literackimi wspomnianych autorek i usłyszeć fragmenty tych utworów w ich wykonaniu.</p>
            {/* <p>„Z Wrocławiem w tle” – to nowy cykl literacki zorganizowany we współpracy z Wydziałem Promocji Miasta i Turystyki Urzędu Miejskiego we Wrocławiu i Wrocławskim Domem Literatury. A partnerami w tym projekcie jest Stowarzyszenie TUITAM oraz Odra Centrum. Na cykl składają się spotkania z autorami żyjącymi, tworzącymi lub piszącymi o Wrocławiu oraz spacery literackie śladami bohaterów ich powieści.</p>
            <p><strong>Czas: 21-22 lipca 2021</strong>.</p> */}
            <Link to="/z-wroclawiem-w-tle" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project wroclawnaturasztukaarchitektura y21">
          <div>
            <h3>"Wrocław. Natura, sztuka i architektura"</h3>
            <p>Przewodnik "Wrocław - natura, sztuka i architektura" jest efektem wspólnej pracy członków i sympatyków Stowarzyszenia Podróżników TUiTAM. Opisaną przez nas trasę dedykujemy Piotrowi Kasznickiemu (1967-2018), naszemu koledze, przyjacielowi, świetnemu przewodnikowi po Wrocławiu i znawcy świata roślin, o których potrafił fascynująco opowiadać.
            </p>
            <Link to="/wroclaw-natura-sztuka-architektura" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project opowiem y20">
          <div>
            <h3>"Opowiem Ci o Wrocławiu"</h3>
            <p>W ramach projektu powstało sto krótkich historii inspirowanych detalem, miejscem i plenerem filmowym. Tematem postów było dziedzictwo kulturowe Wrocławia, jego zabytki, pomniki, muzea, artyści, wydarzenia z dawnej i powojennej historii miasta. Teksty do publikacji pojawiały się jako codzienne posty na fanpage'u Stowarzyszenia.
            </p>
            <Link to="opowiem-ci-o-wroclawiu" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project tropem y20">
          <div>
            <h3>"Tropem naszego dziedzictwa" - przewodnik</h3>
            <p>„Tropem naszego dziedzictwa. Kąty Wrocławskie, Kobierzyce, Żórawina, Siechnice, Domaniów” - przewodnik po gminach leżących w sąsiedztwie lub tuż przy granicach Wrocławia.
            </p><p>
              Autorzy: tekst Marta Miniewicz, zdjęcia Zbigniew Sobierajski.<br />
              PDF do pobrania, 96 stron, 12 MB.
            </p><p>
              Wydawnictwo współfinansowane jest ze środków UE w ramach realizacji projektu grantowego LGD Lider A4 pod nazwą "Dbamy o nasze dziedzictwo, w przestrzeni obszaru Lider A4 i działaniach mieszkańców!"
            </p>
            <Link to="/tropem-naszego-dziedzictwa" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project dodaj y20">
          <div>
            <h3>"Od słowa do słowa"</h3>
            <p>„Od słowa do słowa” to projekt realizowany nas od 16 marca do 30 października 2020 roku w ramach programu Narodowego Centrum Kultury pn. „Ojczysty dodaj do ulubionych 2020”. Chcemy zwrócić uwagę na przestrzeń miejską jako nośnik wartości kulturowych, uwrażliwić na język mówiony i pisany, rozbudzić zainteresowanie językiem i literaturą polską.
            </p>
            <p>
              W ramach zadania powstały tematyczne karty zadań oraz karta do gry miejskiej. Częścią praktyczna jest osiem wycieczek tematycznych.
            </p>
            <Link to="/od-slowa-do-slowa" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

        <div className="project covid y20">
          <div>
            <h3>Odkryj to sam - edukacja regionalna w sieci</h3>
            <p>
              W ramach projektu „Covid-19” i zadania „Odkryj to sam - edukacja regionalna w sieci” przygotowanych zostało 8 multimedialnych kart aktywności dla dzieci i młodzieży oraz rodzin z dziećmi. Tematyczne karty rozwijają zainteresowania społeczności lokalnej Wrocławiem, jego dziedzictwem kulturowym oraz pogłębiają wiedzę o powiecie wrocławskim i regionie dolnośląskim.
            </p>
            <p>
              Zadanie „Odkryj to sam – edukacja regionalna w sieci” zostało sfinansowane ze środków otrzymanych z NIW-CRSO w ramach „Programu Wsparcia Doraźnego Organizacji Pozarządowych w Zakresie Przeciwdziałania Skutkom COVID-19".
            </p>
            <p>
              Projekt finansowany przez Narodowy Instytut Wolności. Centrum Rozwoju Społeczeństwa Obywatelskiego
            </p>
            <Link to="/odkryj-to-sam" className="link-button">Przejdź do projektu</Link>
          </div>
        </div>

      </section>

    </Layout>)
}

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   }
`;
import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default () => {
  // console.log(data)
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Działalność</h2>
      </section>
      <section className="prev_years">
        <h3>Do 2019</h3>
        <ul>
          <li><Link to="/wycieczki-po-dolnym-slasku-i-nie-tylko">Wycieczki po Dolnym Śląsku i nie tylko</Link></li>
          <li><Link to="/szkola-w-miescie">Szkoła w Mieście</Link></li>
          <li><Link to="/projekty-edukacyjne">Projekty edukacyjne</Link></li>
          <li><Link to="/odkrywamy-wroclaw">Odkrywamy Wrocław</Link></li>
          <li><Link to="/poznajemy-wroclaw">Poznajemy Wrocław</Link></li>
          <li><Link to="/strona-po-stronie">Strona po stronie</Link></li>
        </ul>
      </section>
      <section>
        <h3>Aktualności</h3>
      </section>
      <section className="projects">

        <div className="project zwroclawiemwtle y21">
          <div>
            <h3>"Z Wrocławiem w tle"</h3>
            <p>„Z Wrocławiem w tle” – to nowy cykl literacki zorganizowany we współpracy z Wydziałem Promocji Miasta i Turystyki Urzędu Miejskiego we Wrocławiu i Wrocławskim Domem Literatury. A partnerami w tym projekcie jest Stowarzyszenie TUITAM oraz Odra Centrum. Na cykl składają się spotkania z autorami żyjącymi, tworzącymi lub piszącymi o Wrocławiu oraz spacery literackie śladami bohaterów ich powieści.
</p>
            <Link to="/z-wroclawiem-w-tle" className="link-button">Przejdź do projektu</Link>
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

        <div className="project opowiem y20">
          <div>
            <h3>"Opowiem Ci o Wrocławiu"</h3>
            <p>W ramach projektu powstało sto krótkich historii inspirowanych detalem, miejscem i plenerem filmowym. Tematem postów było dziedzictwo kulturowe Wrocławia, jego zabytki, pomniki, muzea, artyści, wydarzenia z dawnej i powojennej historii miasta. Teksty do publikacji pojawiały się jako codzienne posty na fanpage'u Stowarzyszenia.
    </p>
            <Link to="/opowiem-ci-o-wroclawiu" className="link-button">Przejdź do projektu</Link>
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

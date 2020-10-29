import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "../components/video"
import Layout from "../components/layout"
import Banner from "../components/header-banner"
import Playlist from "../components/playlist"
// import currentAudio from "../components/playlist"

// import ReactAudioPlayer from 'react-audio-player'

// import ReactDOM from 'react-dom'
// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'

// import 'react-jinke-music-player/assets/index.css'


const playlist = [{
  title: "Opowiem ci o Wrocławiu. Historie, których nie słyszałeś. Wstęp.",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/00_Opowiem_Ci_o_Wroclawiu.mp3",
},
{
  title: "Tutaj pamiętają imię Alzheimera",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/01_Malgorzata_Urlich-Kornacka_Alzheimer.mp3",
},
{
  title: "Po prostu: Zrób to sam?!",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/02_Marta_Miniewicz_Po_prostu_Zrob_to_sam.mp3",
},
{
  title: "Dom, w którym Wielki Szu ograł Jarka",
  artist: "Malgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/03_Malgorzata_Urlich-Kornacka_Dom_w_ktorym_Wielki_Szu.mp3",
},
{
  title: "Niepunktualność może być zaletą, czyli o kluskowym zegarze z kościoła pw. św. Barbary",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/04_Marta_Miniewicz_Zegar_kluskowy.mp3",
},
{
  title: "Wrocławski południk",
  artist: "Wojciech Zalewski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/05_Wojciech_Zalewski_Wroclawski_poludnik.mp3",
},
{
  title: "Kto bywa na koniu, bywa i pod koniem! (Amor na Pegazie)",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/06_Marta_Miniewicz_Amor_na_Pegazie.mp3",
},
{
  title: "A mnie się marzy kurna chata, czyli bilans musi wyjść na zero",
  artist: "Andrzej Borówka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/07_Andrzej_Borowka_A_mnie_sie_marzy_kurna_chata.mp3",
},
{
  title: "Jak rozpoznać cnotę (kardynalną)?",
  artist: "Wojciech Zalewski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/08_Wojciech_Zalewski_Jak_rozponac_cnote_kardynalna.mp3",
},
{
  title: "Dom Oppenheimów",
  artist: "Beata Wers",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/09_Beata_Wers_Dom_Oppenheimow.mp3",
},
{
  title: "Od balonu do stacji orbitalnej. Lotnicze tradycje Gądowa Małego",
  artist: "Tadeusz Dudkowski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/10_Tadeusz_Dudkowski_Od_balonu_do_stacji_orbitalnej.mp3",
},
{
  title: "Kultowa krata",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/11_Malgorzata_Urlich-Kornacka_Kultowa_krata.mp3",
},
{
  title: "Duby smalone o początkach Wrocławia?",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/12_Marta_Miniewicz_Duby_smalone.mp3",
},
{
  title: "Papuga w zabytkowej klatce",
  artist: "Bogna Piter",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/13_Bogna_Piter_Papuga_w_zabytkowej_klatce.mp3",
},
{
  title: "Wrocławskie tropy Aleksandra Fredry",
  artist: "Aldona Mikucka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/14_Aldona_Mikucka_Aleksander_Fredro.mp3",
},
{
  title: "Podwójne życie profesora Lewickiego",
  artist: "Bogdan Bernacki",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/15_Bogdan_Bernacki_Podwojne_zycie_profesora_Lewickiego.mp3",
},
{
  title: "Wyspiańskiego wspominki wrocławskie",
  artist: "Sebastian Baginski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/16_Sebastian_Baginski_Wyspianski.mp3",
},
{
  title: "Misiu, misiu, daj nam wody!",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/17_Malgorzata_Urlich-Kornacka_Misiu_misiu.mp3",
},
{
  title: "W pracowni maga",
  artist: "Bogna Piter",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/18_Bogna_Piter_W_pracowni_maga.mp3",
},
{
  title: "Pierwsza na świecie kaplica wotywna z recyklingu",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/19_Malgorzata_Urlich-Kornacka_Kaplica_wotywna_z_recyklingu.mp3",
},
{
  title: "Anioł Botticellego, wirtuoz i polityk",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/20_Marta_Miniewicz_Aniol_Botticellego_wirtuoz_i_polityk.mp3",
},
{
  title: "Lepszy goły Szermierz niż...",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/21_Malgorzata_Urlich-Kornacka_Lepszy_goly_Szermierz.mp3",
},
{
  title: "Nieudane interesy Słowackiego z wrocławskim księgarzem",
  artist: "Sebastian Baginski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/22_Sebastian_Baginski_Slowacki_Korn.mp3",
},
{
  title: "Uważaj, do kogo mówisz (przy piwie)!",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/23_Marta_Miniewicz_Uwazaj_do_kogo_mowisz.mp3",
},
{
  title: "Kasztany z placu Pigalle",
  artist: "Bogdan Bernacki",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/24_Bogdan_Bernacki_Kasztany_z_placu_Pigalle.mp3",
},
{
  title: "Kamienny poczet wybrańców",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/25_Malgorzata_Urlich-Kornacka_Kamienny_poczet.mp3",
},
{
  title: "Strzeż się tych miejsc!",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/26_Marta_Miniewicz_Strzez sie tych miejsc.mp3",
},
{
  title: "Najstarsza wrocławska kwiaciarka",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/27_Malgorzata_Urlich-Kornacka_Najstarsza_kwiaciarka.mp3",
},
{
  title: "Ślady dwunastowiecznego Ołbina",
  artist: "Tatiana Granowska",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/28_Tatiana_Granowska_Slady_dwunastowiecznego_Olbina.mp3",
},
{
  title: "O mężczyźnie z najdłuższą brodą i inne dziwne wrocławskie rekordy",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/29_Marta_Miniewicz_Wroclawskie_rekordy.mp3",
},
{
  title: "Hłasko i autograf Picassa",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/30_Malgorzata_Urlich-Kornacka_Hlasko_i_autograf_Picassa.mp3",
},
{
  title: "Najdziwniejszy most w mieście",
  artist: "Tadeusz Dudkowski",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/31_Tadeusz_Dudkowski_Najdziwniejszy_most_w_miescie.mp3",
},
{
  title: "O bogu Viadrusie, Odrze wieśniaczce i przyczynach powodzi",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/32_Marta_Miniewicz_O_bogu_Viadrusie.mp3",
},
{
  title: "Tutaj bije serce Nadodrza",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/33_Malgorzata_Urlich-Kornacka_Tutaj_bije_serce_Nadodrza.mp3",
},
{
  title: "„Człowieczy los nie jest bajką ani snem...”",
  artist: "Bogdan Bernacki",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/34_Bogdan_Bernacki_Czlowieczy_los.mp3",
},
{
  title: "Włoski styl, polski design",
  artist: "Małgorzata Urlich-Kornacka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/35_Malgorzata_Urlich-Kornacka_Wloski_styl_polski_design.mp3",
},
{
  title: "Ogrody Ossolineum",
  artist: "Aldona Mikucka",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/36_Aldona_Mikucka_Ogrody_Ossolineum.mp3",
},
{
  title: "Tomasz Rodziński – rzeźbiarz perfekcyjny",
  artist: "Bogna Piter",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/37_Bogna_Piter_Tomasz_Rodzinski_artysta_perfekcyjny.mp3",
},
{
  title: "Rajski ogród",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/38_Marta_Miniewicz_Rajski_ogrod.mp3",
},
{
  title: "„Mały Bachusek przechyla swą beczkę, a Fredro się raczy tokajem”",
  artist: "Bogdan Bernacki",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/39_Bogdan_Bernacki_Maly_Bachusek_Fredro.mp3",
},
{
  title: "Na kowadle nie siadać! W pracowni wrocławskiego kowala",
  artist: "Marta Miniewicz",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/40_Marta_Miniewicz_Na_kowadle_nie_siadac.mp3",
}
]

let currentAudio = {
  artist: "Marta Miniewicz",
  title: "Opowiem ci o Wrocławiu. Historie, których nie słyszałeś. Wstęp.",
  src: "http://tdudkowski.usermd.net/files/tuitam/opowiem_audio/00_Opowiem_Ci_o_Wroclawiu.mp3",
}

const myFunction = (artist, title, src) => {
  currentAudio = {
    artist: artist,
    title: title,
    src: src,
  }
  document.getElementById("audioEl").src = currentAudio.src;
  document.getElementById("caption").textContent = `${artist} - ${title}`
}


export default ({ data }) => {
  return (
    <Layout>
      <Banner />
      <section>
        <h2>Opowiem ci o Wrocławiu</h2>
      </section>
      <section>
        <h3 className="line-bottom">Opis</h3>
        <p>W ramach programu Narodowego Centrum Kultury pn. „Kultura w sieci” Stowarzyszenie Podróżników TUiTAM realizuje w okresie od 11.05.2020 do 30.10.2020 projekt „Opowiem ci o Wrocławiu – historie, których nie słyszałeś”.</p>
        <p>W ramach projektu powstało sto krótkich historii inspirowanych detalem, miejscem i plenerem filmowym. Tematem postów będzie dziedzictwo kulturowe Wrocławia, jego zabytki, pomniki, muzea, artyści, wydarzenia z dawnej i powojennej historii miasta. Teksty do publikacji pojawiały się jako codzienne posty na fanpage'u Stowarzyszenia.</p>
        <p>Najciekawsze opowieści oraz te, które wzbudziły największe zainteresowanie czytelników, staną się rozdziałami e-booka i audiobooka oraz podstawą do scenariuszy krótkich filmów video.</p>
        <p>Multimedialna książka o Wrocławiu pt. "Opowiem ci o Wrocławiu – historie, których nie słyszałeś" będzie pierwszą tego typu publikacją o mieście łączącą różne formy przekazu (bogato ilustrowane teksty z nagraniami audio oraz filmami). Będzie to praca zbiorowa, stworzą ją przewodnicy ze Stowarzyszenia TUiTAM.</p>
      </section>
      <h3 className="line-bottom">E-book</h3>
      <section>
        <div className="ebook">
          <div><h4>Przewodnicy TUiTAM <em>"Opowiem ci o Wroclawiu. Historie, których nie słyszałeś."</em></h4>
            <ul>
              <li>e-book do pobrania</li>
              <li>88 stron</li>
              <li>40 opowieści (spis treści w poniższym audiobooku)</li>
              <li>PDF 22 MB</li>
            </ul>
          </div>
          <a href="http://tdudkowski.usermd.net/files/tuitam/TUiTAM_-_Opowiem_ci_o_Wroclawiu.pdf"><Img fluid={data.okladka_opowiem.childImageSharp.fluid} alt="okładka e-booka" width="200" className="" /></a>

        </div>
      </section>
      <h3 className="line-bottom">Audiobook</h3>

      <section className="audio">
        <figure>
          <figcaption id="caption">{currentAudio.artist} - <em>{currentAudio.title}</em></figcaption>
          <audio
            id="audioEl"
            controls
            src={currentAudio.src}>
            Your browser does not support the <code>audio</code> element.
    </audio>
        </figure>

        <ul className="">
          <li>
            <h4>Spis treści</h4>
          </li>
          {playlist.map(({ key, artist, title, src }) => (
            <li key={title}>
              <button onClick={() => myFunction(artist, title, src)}>{artist} - <em>{title}</em></button>
            </li>
          ))}
        </ul>


      </section>
      <h3 className="line-bottom">Wideo</h3>
      <section className="videos">

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/wTPAmgN7GJQ" videoTitle='"EPlac Solny we Wrocławiu" [8:20]' /><div>"Plac Solny we Wrocławiu" Beata Wers [6:52]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/R-TD-4j6xi8" videoTitle='"Eugeniusz Get-Stankiewicz" Wojtek Zalewski [8:20]' /><div>"Eugeniusz Get-Stankiewicz" Wojtek Zalewski [8:20]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PTbDSRIygXw" videoTitle='"Literacki Wrocław" Marta Miniewicz [8:41]' /><div>"Literacki Wrocław" Marta Miniewicz [8:41]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/qfCalOs3dZY" videoTitle='"Tajemnice wrocławskiej ALMA MATER" Sebastian Bagiński [9:47]' /><div>"Tajemnice wrocławskiej ALMA MATER" Sebastian Bagiński [9:47]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/hmbsOU6FSV0" videoTitle='"Legendy Wrocławia" Marta Miniewicz [12:00]' /><div>"Legendy Wrocławia" Marta Miniewicz [12:00]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/gKcWURfLeLE" videoTitle='"Ołbin nieoczywisty" Tatiana Granowska-Florea [6:47]' /><div>"Ołbin nieoczywisty" Tatiana Granowska-Florea [6:47]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/qx89pUUkKJ0" videoTitle='"Wojciech Jarząbek i jego realizacje" Bogna Piter [8:20]' /><div>"Wojciech Jarząbek i jego realizacje" Bogna Piter [8:20]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/OV-BinWY4x0" videoTitle='"Sylwester Chęciński. Filmowy Wrocław" Małgorzata Urlich-Kornacka oraz Bogdan Bernacki [8:40]' /><div>"Sylwester Chęciński. Filmowy Wrocław" Małgorzata Urlich-Kornacka oraz Bogdan Bernacki [8:40]</div></div>

        <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/WvJ2aM4EyWg" videoTitle='"Wrocławskie NAJ, czyli śladami miejskich rekordów" Małgorzata Urlich-Kornacka [9:02]' /><div>"Wrocławskie NAJ, czyli śladami miejskich rekordów" Małgorzata Urlich-Kornacka [9:02]</div></div>

      </section>
      <section>
        <hr />
        <Img fluid={data.logo_opowiem.childImageSharp.fluid} alt="logo projektu" width="484" className="project-logo" /></section>
    </Layout >)
}

export const pageQuery = graphql`
  query {
     logo_opowiem: file(relativePath: { eq: "logo-opowiem-ci-o-wroclawiu-vertical.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      okladka_opowiem: file(relativePath: { eq: "opowiem_okladka_th300.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;

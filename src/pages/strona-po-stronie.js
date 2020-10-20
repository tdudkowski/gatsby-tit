import React from 'react'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Banner from "../components/header-banner"

export default ({data}) => {
    // console.log(data)
return (
<Layout>
<Banner />
<div className="idky">
<h2>Strona po stronie</h2>

<h3>"Spotkania pod Gryfami" oraz spacery literackie w ramach projektu "Wrocław strona po stronie czyli kto czyta nie błądzi"</h3>

<p>W ramach mikrograntu ESK 2016 chcielibyśmy przedstawić wrocławianom i turystom Wrocław w wielu różnych aspektach, jego legend, zakorzenienia w tradycji kulinarnej oraz literackim (i tu osobno zrobiliśmy wycieczkę o nowej specjalności Wrocławia powieści retrokryminalnej); zaprezentować sylwetki i twórczość poetów i pisarzy wszystko w nowatorskiej formie – spotkań oraz oprowadzań "eventowych" przygotowanych przez młodych i pełnych pasji twórców, muzyków i przewodników wrocławskich zrzeszonych w Stowarzyszeniu Podróżników TUiTAM.</p>

<Img fluid={data.esk2016logo.childImageSharp.fluid} className="cover" alt="ESK 2016 logo" />

<p>Spotkania autorskie i wieczory literackie odbyły się w restauracji Pod Gryfami przy Rynku. Podczas spacerów przemierzyliśmy całe centrum Wrocławia – śladami pisarzy lub bohaterów ich książek.</p>

<ul>
	<li>27 IV 17.00 "Jakob Böhme życie i twórczość" przedpremierowy pokaz filmu Łukasza Chwałko</li>
	<li>28 IV 19.00 Spotkanie autorskie z Nadią Szagdaj autorką retrokryminałów wrocławskich</li>
	<li>29 IV 19.00 "Wrocław z dreszczykiem" czyli śladami bohaterów wrocławskich powieści kryminalnych, spacer połączony z akcentami literackimi i muzycznymi, start kamienica pod Gryfami Rynek 2</li>
</ul>

<h3>Wrocław kryminalny</h3>

<p>Zaledwie kilkanaście lat minęło odkąd w mieście Breslau pojawił się niemiecki Kojak - Eberhard Mock. W 1999 dr Marek Krajewski, dotąd filolog klasyczny z Uniwersytetu Wrocławskiego, zadebiutował nowym gatunkiem kryminału a jego nowym bohater na stałe już wśród nas zagościł i stał się rozpoznawalną, kojarzoną z Wrocławiem marką. Jak do tej pory, łącznie z najnowszą, jeszcze nieznaną w czasie tej wycieczki powieścią, cykl przygód niezmożonego pogromcy zbrodniarzy składa się z siedmiu powieści. Od siedmiu lat towarzyszy mu polski odpowiednik ze Lwowa: Edward Popielski, który nie tylko spotyka Mocka we Wrocławiu ale i pozostaje w mieście po wojnie.</p>

<p>Retrokryminał, specjalność Marka Krajewskiego, staje się w Polsce coraz bardziej popularny, ma np. swój elbląski odpowiednik, ma też swój odpowiednik lokalny, wrocławski ale kobiecy autorstwa Nadii Szagdaj: w 2013 wydana zostaje pierwsza z trzech części opowieści o przygodach Klary Schulz. Nasza wycieczka biegła właśnie śladami tych dwóch postaci: niestrudzonego, obdarzonego i niezwykła siłą i wieloma słabościami policjanta Eberharda Mocka i niezwykłej dla epoki kobiety-detektywa Klary Schulz. Czy kiedyś się spotkają? Cóż, w tej sprawie spotkać się powinni najpierw sami autorzy.</p>

<h3>Wrocław legendarny</h3>

<ul>
	<li>27 V 18.00 Most Tumski "O łysym aniołku i śląskiej klusce z kamienia, o białej róży i lwie, który spełnia życzenia" Spacer szlakiem legend Ostrowa Tumskiego, wycieczka rodzinna z opowieścią przewodnicką i muzyczną niespodzianką. Spacer prowadziły: Marta Miniewicz i Małgorzata Urlich-Kornacka. Grała i śpiewała: Hanna. Rymowane teksty legend napisała: Justyna Rapacz.</li>
	<li>30 V 15 spotkanie Kamienica Pod Gryfami Rynek 2 Spotkanie literackie z Beatą Maciejewską</li>
</ul>

<p>Na Ostrowie Tumskim, najstarszej części Wrocławia, każde miejsce opowiada swoją historię: o łakomczuchu Konradzie i śląskiej klusce, o Henryku, który za karę skamieniał na katedralnej wieży, o kłótni biskupa Tomasza z ambitnym księciem Henrykiem, o spotkaniu księcia Mieszka z czeską Dąbrówką, o aniołku łysym jak kolano.</p>

<p>W majowy wieczór spacerowaliśmy rodzinnie szlakiem legend Ostrowa Tumskiego. My opowiadaliśmy historie, uczestnicy wycieczki wcielali się w rolę Mieszka, kochającej Agnieszki (również śląskiej kluski). Wszyscy słuchaliśmy przy akompaniamencie gitary historii o kościele na dachu (św. Krzyża i św. Bartłomieja) i o świętej Jadwidze.</p>

<p>Opowieść o pobożnej (i upartej) księżnej zaczynała się tak:</p>

<p>Księżna Jadwiga, żona Henryka, Cichutko wstaje i drzwi zamyka. Ciemno i głucho jeszcze dokoła, A ona biegnie już do kościoła...</p>

<h3>Wrocław kulinarny</h3>

<ul>
	<li>19 VI 12.00 "Jak smakował Wrocław czyli co i gdzie jedzono w dawnym Wrocławiu, start Rynek Piwnica Świdnicka Podczas wycieczki Jak smakował Wrocław..." towarzyszył nam muzyk - fagocista - bo w dawnych kawiarniach i restauracjach muzyki nie brakowało.</li>
	<li>22 VI 18.00 "Smaki dawnego Wrocławia" spotkanie z dr Grzegorzem Sobelem Restauracja pod Gryfami Rynek 2</li>
</ul>

<p>Tych, którzy czuli niedosyt informacji zaprosiliśmy na spotkanie z fachowcem dawnej kuchni Wrocławia - Panem Grzegorzem Sobelem - autorem książki o historii gastronomii wrocławskiej, oczywiście spotkanie odbyło się Pod Gryfami, gdzie gastronomia jest wyborna.</p>

<p>Opowiadaliśmy oczywiście o kawie, a szczególnie o legendzie wrocławskich kawiarni - Cafe Fahrig, choć pierwszą kawiarnią wiedeńską we Wrocławiu była Cafe Cloin prowadzona przez wiedeńczyka od 1876 roku przy ul. Piotra Skargi 19. Niecałe dziesięć lat później w stolicy Dolnego Śląska działało już osiem Wiener Cafe, a w 1900 roku było ich dwadzieścia sześć. Z czasem każdy lokal, który miał ograniczoną ofertę kulinarną, a dominowała tam kawa, był stół bilardowy i codzienne gazety nazywano kawiarnią wiedeńską.</p>

<p>Snuliśmy historię o rozwoju gastronomii, również o kawiarni Pod Złotą Koroną, w której po raz pierwszy we Wrocławiu dano gościom papierowe menu! Zastanawialiśmy się wspólnie, czy rację mieli zwolennicy piwa bawarskiego, że tylko ten napój ma prawo nazywać się piwem. Na spacer zaprosiliśmy "palaczy tytoniu, czytelników gazet, polityków, artystów, uczonych, wielbicieli bilardu" i wszystkich innych, bo każdy mógł w dawnej kawiarni rozwijać swoje zainteresowania i czuć się swobodnie.</p>

<h3>Wrocław literacki</h3>

<ul>
	<li>29 VIII 17.00 Spotkanie z Dyrektorem Muzeum Narodowego Piotrem Oszczanowskim, miejsce Restauracja Pod Gryfami Rynek 2</li>
	<li>29 VIII 18.30 Literacka podróż przez stulecia - spacer literacki z muzyczną niespodzianką, start Restauracja Pod Gryfami Rynek 2</li>
</ul>

<p>Od Rynku do Podwala - zobaczyliśmy podpis Czesława Miłosza pozostawiony w podziemiach Art Hotelu i wspomnieliśmy niedawno zmarłego, wielkiego nieobecnego wrocławskiego życia kulturalnego: Tadeusza Różewicza, który żył tu prawie 50 lat. Z Wrocławiem związany był Fredro, który rozważał nawet kupienie domu gdzieś na Dolnym Śląsku, mieszkał tu też przez kilka lat Józef Wybicki - obaj z tego samego politycznego powodu nie mogli dostać się na ziemie rodzinne: Fredro nie dostał pozwolenia na wjazd do Galicji, a Wybicki do Wielkopolski. Również z powodu polityki musiał opuścić August Heinrich Hoffmann von Fallersleben, który przez 20 lat pracował na uniwersytecie wrocławskim, po napisaniu w 1842 "Pieśni niepolitycznych" krytykujących państwo pruskie został skazany na banicję, ale rok wcześniej na wyspie Helgoland napisał późniejszy hymn Niemiec.</p>

<p>Przypomnieliśmy nowy, ważny obiekt na turystycznej mapie Wrocławia - powstałe niedawno Muzeum Pana Tadeusza, w którym przechowywany jest jeden z dwóch wrocławskich obiektów z listy UNESCO "Pamięć Świata": rękopis "Pana Tadeusza". Drugim jest Księga Henrykowska z najstarszymi słowami w języku polskim znajdująca się we wrocławskim Muzeum Archidiecezjalnym.</p>

<p>We Wrocławiu urodził się i umarł Karl von Holtei, niezwykle barwna postać niemieckiej kultury, wagabunda, który przemierzył całą Europę i przyjaciel Mickiewicza oraz sprawy polskiej. Do szkoły we Wrocławiu chodził Gerhard Hauptmann znany dzięki "Tkaczom" niemiecki noblista, znawca dialektu śląskiego. Tuż obok jego dawnej szkoły mieszkanie bohatera słynnych powieści kryminalnych umieścił Marek Krajewski. Właśnie przy placu Teatralnym miał mieszkać podczas wojny Eberhard Mock. Niedawno okazało się, że rzeczywiście ktoś o bardzo podobnym nazwisku był policjantem we Wrocławiu w 1913, takie nazwisko odnaleziono na liście przepustek z 1913 odnalezionej w Hali Stulecia i to znalezisko było przyczyną napisania nowej powieści.</p>

<p>Na koniec opowiedzieliśmy o osobie, której nie można pominąć mówiąc o literackich tradycjach stolicy Dolnego Śląska - najsłynniejszym wrocławskim poecie i wielkim skandaliście swojej epoki - Rafale Wojaczku.</p>

<h3>Wrocław przełomu wieków widziany oczami Gerharta Hauptmanna</h3>

<p>26 września zaprosiliśmy wrocławian na spotkanie z kierownikiem Panoramy Racławickiej – panem Romualdem Nowakiem oraz na spacer pt. „Wrocław przełomu wieków widziany oczami Gerharta Hauptmanna”. Literacka wycieczka odbyła się w ramach obchodów 70 rocznicy śmierci śląskiego noblisty oraz z okazji otwarcia wystawy w ratuszu wrocławskim „Gerhart Hauptmann – obrazy z życia”. We wrześniu odbyło się również rozdanie Nagrody Kulturalnej Śląska, której laureatką została pani dyrektor Muzeum Miejskiego – Domu Gerharta Hauptmanna w Jagniątkowie – pani Julita Izabela Zaprucka. Wszystkie te wydarzenia skłoniły nas do przybliżenia wrocławianom osoby tego wybitnego śląskiego noblisty.</p>

<p>Podczas wycieczki literackiej pokazaliśmy Wrocław przełomu wieków (XIX/XX w.) – ten zarówno piękny, jak i tajemniczy i mroczny. Dzięki fragmentom autobiograficznej powieści Gerharta Hauptmanna „Przygoda mojej młodości” oraz przedwojennym pocztówkom dowiedzieliśmy się, jak wyglądało i żyło kiedyś nasze miasto. A przyznać trzeba, że żyło się wtedy niezwykle ciekawie… Podczas dwugodzinnego spaceru udaliśmy się śladami śląskiego noblisty i zobaczyliśmy, jak wyglądały kiedyś i jak wyglądają obecnie miejsca, z którymi związany był artysta i pisarz Gerhart Hauptmann, dowiedzieliśmy się wiele ciekawostek z życia poety a dzięki wierszom i balladom w wykonaniu artystki Hanny Krężlewskiej-Chabko mogliśmy zapoznać się z twórczością poetycką śląskiego noblisty. We Wrocławiu kończył on bowiem szkołę, tutaj podjął pierwsze próby działalności artystycznej i literackiej, tutaj przyjeżdżał jako dojrzały i uznany autor. Wycieczkę poprowadziły Małgorzata Urlich-Kornacka oraz Katarzyna Sroka ze Stowarzyszenia Podróżników TUiTAM.</p>
</div>
</Layout>)
}

export const pageQuery = graphql`
  query {
    esk2016logo: file(relativePath: { eq: "esk2016-logo.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
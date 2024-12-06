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
<section>
<h2>Trasy wycieczek</h2>
</section>
<section className="routes">
<dl>
  <dt>Wrocław dla początkujących</dt>
  <dd>Zwiedzanie obu najstarszych części miasta - Ostrowa Tumskiego i Starego Miasta. Czas: 3-3,5 godz.</dd>
  <dd>
<Img fluid={data.wroclaw_rynek1.childImageSharp.fluid} alt="Wrocław Rynek" className="routes_icon" />
<p>Przebieg trasy i najważniejsze obiekty
Trasa: Zwiedzanie najstarszej części miasta (czas: około 3-3,5 godz.): zaczynając od Ostrowa Tumskiego wraz z Katedrą św. Jana Chrzciciela (możliwość wejścia do barokowych kaplic Katedry, które nie zostały zniszczone podczas II Wojny Światowej, oraz wjazd na wieżę widokową (aktualny cennik Zwiedzanie katedry oraz wyjazd na wieżę widokową) przejście przez Wyspę Piaskową obok Hali Targowej i Ossolineum do Uniwersytetu (możliwe zwiedzanie barokowego kompleksu, m.in. Auli Leopoldina oraz Oratorium Marianum (aktualny cennik Muzeum UWr - godziny otwarcia) spacer po Starym Mieście: średniowieczne więzienie, Stare Jatki – dawny targ mięsny oraz Rynek z gotyckim Ratuszem.</p>
  <p>Opis: Wrocław w ciągu 1000 lat istnienia miasta nazywano "kwiatem Europy", Wenecją Północy, "mikrokosmosem Europy". Tu przecinały się najważniejsze szlaki kupieckie: "Szlak Bursztynowy" znad Adriatyku nad Morze Bałtyckie oraz "Wysoki Trakt" - via regia - z Ukrainy na zachód Europy. Wrocław stał się szybko centrum targowym: przez miasto ciągnęły kupieckie karawany w różne strony świata oraz pielgrzymi podróżujący z Czech do grobu św. Wojciecha w Gnieźnie. Dogodne położenie nad Odrą i jej czterema dopływami, które stanowiły jego naturalną ochronę, przyczyniło się do tego, że z małego grodu na Ostrowie Tumskim powstała wspaniała metropolia. Wycieczka poprowadzi po najpiękniejszych miejscach we Wrocławiu, śladami średniowiecznej i barokowej architektury i ciekawej historii miasta – śladami wrocławskich legend oraz anegdot o sławnych mieszkańcach miasta.</p>     
</dd>

  <dt>Wrocław liryczny</dt>
  <dd>Ostrów Tumski (wjazd na wieżę Katedry – panorama najstarszej części miasta oraz najbardziej charakterystycznych obiektów miasta z wysokości 58 metrów), Przystań Kardynalska - rejs statkiem po Odrze w stronę ZOO. Czas: 3 godz.</dd>
  <dd>
  <Img fluid={data.wroclaw_ostrowtumski.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa: Ostrów Tumski (wjazd na wieżę Katedry – panorama najstarszej części miasta oraz najbardziej charakterystycznych obiektów miasta), przystań Kardynalska - rejs statkiem po Odrze w stronę ZOO i powrót na Wyspę Piaskową (można wysiąść przy ZOO i obejrzeć multimedialną fontannę – pokazy o pełnych godzinach od maja do października). Cena biletów: wieża katedralna – 5 zł, rejs statkiem - 22 lub 20 zł N, 17 lub 15 zł U (cena zależy od długości rejsu). Czas trwania: 2 godz. (rejs z wieża widokową), 3 godz. (rejs, wieża widokowa, fontanna multimedialna)</p>
      <p>Opis: Rejs statkiem z opowieścią przewodnicką. Wycieczka polecana dla osób, które chcą spojrzeć na miasto z różnych perspektyw (z wieży widokowej oraz z perspektywy Odry). Odra towarzyszyła Wrocławiowi od samego początku, zapewniając mu naturalną ochronę, stanowiąc drogę komunikacyjną, dostarczając jego mieszkańcom pożywienia i napędzając liczne niegdyś młyny wrocławskie. Rzeka posiada w granicach Wrocławia cztery dopływy: Oławę, Ślęzę i Bystrzycę oraz prawostronną Widawę. To dzięki wyspom, które powstały przez liczne rozgałęzienia Odry oraz mosty (łącznie z mostami kolejowymi i kładkami jest ich obecnie ponad 120), miasto otrzymało miano “Wenecji Północy”. Nie musisz jechać do Włoch, atmosferę Wenecji poczujesz u nas! Odra była błogosławieństwem, ale i przekleństwem mieszkańców Wrocławia. Po katastrofalnych powodziach z końca XIX w. ówczesny rząd zdecydował się na budowę systemu śluz i zapór przeciwpowodziowych. Stanowią one do dziś niezwykłą atrakcję turystyczną miasta. Wobec potęgi żywiołu podczas powodzi tysiąclecia w 1997 okazały się one jednak niewystarczające.</p>
  </dd>

  <dt>Wrocław krasnoludków</dt>
  <dd>Wrocław - miejsce działalności Pomarańczowej Alternatywy - jest słynny jako miasto zamieszkiwane przez ponad 500 krasnali.</dd>
  <dd>
  <Img fluid={data.wroclaw_krasnoludki.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Zejście do krasnoludkowych podziemi Wrocław – miejsce działalności Pomarańczowej Alternatywy – jest słynny jako miasto zamieszkiwane przez ponad 500 krasnali. Podczas spaceru po Rynku i sąsiadujących z Rynkiem uliczkach Starego Miasta (ul. Więzienna, Jatki, ul. Św. Mikołaja) zobaczymy najbardziej znane wrocławskie krasnoludki: niezgodne Syzyfki toczące kulę, uśmiechniętego Życzliwka, łobuziaka – krasnala Więźnia Nicpotka. Czas: 1,5-2 godz.</p>
   
  </dd>

  <dt>Legendarny Wrocław</dt>
  <dd>Legendy Wrocławia. Dwie trasy do wyboru: Ostrów Tumski lub Stare Miasto. Czas: 2 godz.</dd>
  <dd>
  <Img fluid={data.wroclaw_mostpokutnic.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa I: Kluskowa Brama i inne legendy Ostrowa Tumskiego: podczas spaceru po najstarszej części miasta - Ostrowie Tumskim (od Bramki Kluskowej przy kościele św. Idziego, przez pl. Kościelny do Mostu Tumskiego, zwanego Mostem Miłości) poznamy najbardziej znane i najstarsze legendy i zabytki Wrocławia, m.in. historię śląskiej kluski, kamiennej głowy na wieży katedralnej, sporu pomiędzy księciem a wrocławskim biskupem, przy okazji obejrzymy wrocławską Katedrę, najstarszy kościół św. Idziego, dwupoziomowy kościół św. Krzyża i św. Bartłomieja, rzeźbę św. Jana Nepomucena oraz słynne kłódki na tzw. Moście Miłości. W czasie wycieczki jest możliwość wjazdu na wieżę widokową Katedry wrocławskiej (5 zł). Czas trwania: około 2 godz.
</p>
      <p>Trasa II: Mostek Pokutnic i inne legendy Starego Miasta: spacer po wrocławskim Rynku i uliczkach Starego Miasta ( ul. Szewska, św. Mikołaja, Więzienna). W czasie spaceru przyjrzymy się zabytkowym rynkowym kamieniczkom, Ratuszowi oraz gotyckim kościołom św. Marii Magdaleny i św. Elżbiety, usłyszymy związane z tymi obiektami wrocławskie podania, m.in. Dzwon Grzesznika, Mostek Pokutnic. W czasie wycieczki jest możliwość wejścia na punkty widokowe - Mostek Pokutnic w kościele Marii Magdaleny (2 i 4 zł) lub wieżę kościoła św. Elżbiety (5 zł). Czas trwania: około 2 godz.</p>
  </dd>

  <dt>Wrocław parków i ogrodów</dt>
  <dd>Hala Stulecia (zabytek na liście UNESCO), pergola, pokaz fontanny multimedialnej, Ogród Japoński w Parku Szczytnickim (najstarszy park miejski w Polsce), Ogród Zoologiczny z Afrykarium lub Ogród Botaniczny.</dd>
  <dd>
  <Img fluid={data.wroclaw_ogrodjaponski.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa: Hala Stulecia - zabytek na liście UNESCO (możliwość zwiedzania Centrum Poznawczego w Hali Stulecia i obejrzenia wnętrza); pergola, pokaz fontanny multimedialnej, Ogród Japoński w Parku Szczytnickim, Ogród Zoologiczny (zamiast ZOO możliwość spaceru po Ogrodzie Botanicznym). Pokazy fontanny multimedialnej od maja do października o pełnych godzinach, wstęp do Ogrodu Japońskiego 4 zł N, 2 zł U, bilet do ZOO 25 zł N, 15 zł U. Ogród Botaniczny otwarty od 1 kwietnia do 30 listopada, wstęp 10 zł N, 5 zł U Czas trwania wycieczki: 3-5 godziny (w zależności od trasy).</p>
      <p>Opis: O Wrocławiu mówi się, że to miasto zieleni i nic w ty dziwnego, ponieważ w granicach miasta znajduje się kilka kilkudziesięciohektarowych olbrzymich parków (największy z nich to najstarszy w Polsce Park Szczytnicki o powierzchni ponad 100 ha). Stare Miasto otacza Promenada Staromiejska - zielony bulwar spacerowy powstały po wyburzeniu murów obronnych. W samym centrum miasta na odrzańskich wyspach znajdują się zielone tereny rekreacyjne, na Wyspie Słodowej odbywają się w miesiącach letnich koncerty i różne imprezy plenerowe. Jednym z najciekawszych miejsc "zielonych" we Wrocławiu to okolice Hali Stulecia, obiektu z 1913, wpisanego na listę UNESCO, projektu Maxa Berga, z całym założeniem architektonicznym i krajobrazowym: Pawilonem Czterech Kopuł, pergolą i fontanną multimedialną, Ogrodem Japońskim – jednym z najpiękniejszych ogrodów egzotycznych w Europie, Iglicą i Wrocławskim Ogrodem Zoologicznym (założonym 150 lat temu, w 1865) z zabytkowymi zabudowaniami oraz nowoczesnymi pawilonami i wybiegami oraz jedną z największych atrakcji Wrocławia - Afrykarium.</p>
  </dd>

  <dt>Wrocław nocą</dt>
  <dd>Ostrów Tumski - ul. Katedralna, Most Tumski, bulwar Piotra Włostowica, Ossolineum, Uniwersytet Wrocławski, Stare Miasto - ul. Więzienna, Jatki, Rynek.</dd>
  <dd>
  <Img fluid={data.wroclaw_mosttumski.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa: Ostrów Tumski: ul. Katedralna, Most Tumski, bulwar Piotra Włostowica, Ossolineum, Uniwersytet Wrocławski, Stare Miasto - ul. Więzienna, Jatki, Rynek. Czas zwiedzania: 2-2,5 godz.
</p>
      <p>Opis: Ostrów Tumski najpiękniej i najromantyczniej wygląda w świetle latarni gazowych, które codziennie zapalane są przez wrocławskiego latarnika (przy odrobinie szczęścia można zobaczyć go przy pracy, ubranego w cylinder i czarną pelerynę). Oświetlone 100-metrowe wieże Katedry wydają się jeszcze wyższe, sięgające nieba, a nadodrzańskie bulwary w świetle lamp wyglądają wyjątkowo malowniczo. Wiele osób zdziwi się pewnie tłumami na Starym Mieście, które spotkamy po wyciszonym Ostrowie Tumskim. Nie bez powodu o Wrocławiu mówi się, że to "miasto, które nigdy nie zasypia", można się o tym przekonać na gwarnym, pełnym ogródków piwnych, restauracji i pubów wrocławskim Rynku.</p>
  </dd>

  <dt>Wrocław kultury żydowskiej</dt>
  <dd>Do czasów hitlerowskich Wrocław był zaraz po Berlinie drugim ośrodkiem życia żydowskiego w Niemczech, to tu powstał nowoczesny judaizm. Dwie trasy do wyboru.</dd>
  <dd>
  <Img fluid={data.wroclaw_zydowski.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa I: Stary Cmentarz Żydowski przy ul. Ślężnej. Czynny codziennie od 10.00 do 18.00, wstęp 10 zł N, 7 zł U. Czas zwiedzania: 1,5-2 godz.
<p>Trasa II: Dawna dzielnica żydowska - klasycystyczna Synagoga pod Białym Bocianem przy ul. Włodkowica i Dom Modlitw przy synagodze (na balkonach synagogi udostępniona jest stała ekspozycja "Historia Odzyskana. Życie Żydów we Wrocławiu i na Dolnym Śląsku." Dodatkowo prezentowane są cykliczne wystawy okolicznościowe). Synagoga czynna od niedzieli do piątku od 10.00-17.00, wstęp 10 zł N, 5 zł U. Czas zwiedzania: 2-2,5 godz. Stary Cmentarz Żydowski.</p>

<p>Opis: Wrocław nie przypadkiem nazywano kiedyś “kwiatem Europy”. Od zawsze spotykały się tu różne religie i kultury, przyczyniając się do rozkwitu – niczym wielobarwnej kwietnej mozaiki – życia naszego miasta. Znaczącą część tej mozaiki stanowiła narodowość żydowska wraz ze swą liczącą kilka tysięcy lat tradycją. Ślady, jakie pozostały po żyjącej tu narodowości żydowskiej przypominają o dokonaniach i znaczeniu Żydów dla historii naszego miasta i regionu.</p>


</p>
      <p>Stary Cmentarz Żydowski przy ul. Ślężnej stanowi, ze względu na pochowane tutaj najwybitniejsze jednostki XIX i XX-wiecznego miasta, swoisty panteon wrocławskich Żydów. Zespół rzeźby nagrobnej, od tradycyjnych macew do monumentalnych grobowców, stanowi niezwykłe miejsce na turystycznej mapie Wrocławia. Znajduje się tu ok. 12 tys. nagrobków i grobowców reprezentujących różne style oraz kierunki XIX i XX w.: kaplice imitujące antyczne świątynie, portale oraz baldachimy z roślinnymi motywami romańskimi, zapożyczenia z architektury bizantyjskiej i islamu, nagrobki secesyjne oraz w duchu modernizmu. Są tu tradycyjne skromne macewy z napisami w języku hebrajskim, są też nagrobki i grobowce z napisami niemieckimi. Na cmentarzu spoczywa cała elita XIX i XX-wiecznego Wrocławia. Ludzie biznesu: bracia Alexander (na nagrobku płaskorzeźba nieistniejącego dziś już banku, należącego do tej rodziny), Adolf Bielschowsky, właściciel młyna Maria na Wyspie Piaskowej (pomnik w formie młyna), Heinrich Heimann, twórca fundacji elektryfikującej wrocławskie tramwaje oraz ludzie nauki, kultury i sztuki: nagrobki J.F. Cohna, profesora botaniki, współpracownika Roberta Kocha, H. Cohna, profesora okulistyki, u którego leczyli się wszyscy wielcy tego świata, Emila Ludwiga (syna H. Cohna) – autora wielu biografii, m.in. Goethego, Heinricha Graetza, profesora historii UWr., autora pierwszej syntetycznej historii Żydów od czasów biblijnych do XIX w., Friederike Kempner pisarki społecznej, która otrzymała przydomek “śląskiego łabędzia”, Ferdynanda Lassalle'a twórcy i czołowego ideologa pierwszej partii robotniczej w Niemczech, rodziców Edyty Stein czy ojca malarza Eugena Spiro.</p>
  </dd>

  <dt>Wrocław dla odkrywców</dt>
  <dd>Wycieczka dla dzieci i młodzieży szkolnej, która oczekuje czegoś więcej niż tradycyjnego zwiedzania z przewodnikiem. Gra miejska "Odkryj Wrocław". Czas: 2 godz.</dd>
  <dd>
  <Img fluid={data.wroclaw_rynek2.childImageSharp.fluid} alt="okładka przewodnika" className="routes_icon" />
      <p>Przebieg trasy i najważniejsze obiekty
Trasa: Rynek Starego Miasta. Czas trwania wycieczki - ok. 2 godz. kościół pw św Marii Magdaleny.
</p>
      <p>Opis: Wycieczka skierowana do dzieci i młodzieży szkolnej, która oczekuje czegoś więcej niż tradycyjnego zwiedzania z przewodnikiem. Uczniowie otrzymują od przewodnika grę miejską "Odkryj Wrocław", samodzielnie rozwiązują zadania, udając się do różnych miejsc w Rynku i wokół Rynku wrocławskiego, uzyskują informacje u mieszkańców, rysują herb miasta, próbują rozszyfrować i odnaleźć informacje ukryte na fasadach budynków. Po ponownym spotkaniu z przewodnikiem następuje rozwiązanie zadań z dodatkowym komentarzem przewodnickim. Zwycięska grupa otrzymuje dyplom "Odkrywcy Wrocławia" oraz małą niespodziankę. Wycieczka zmuszająca do myślenia i pobudzająca do kreatywności. Wycieczka inna niż wszystkie!</p>
  </dd>
</dl>
   
</section>
       
</Layout>)
}

export const pageQuery = graphql`
  query {
  wroclaw_krasnoludki  : file(relativePath: { eq: "routes/Wroclaw-Krasnoludki2_www_th.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   wroclaw_mostpokutnic : file(relativePath: { eq: "routes/Wroclaw-Most-Pokutnic1_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    wroclaw_mosttumski  : file(relativePath: { eq: "routes/Wroclaw-Most-Tumski_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     wroclaw_ogrodjaponski : file(relativePath: { eq: "routes/Wroclaw-Ogrod-Japonski_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     wroclaw_ostrowtumski : file(relativePath: { eq: "routes/Wroclaw-Ostrow-Tumski2_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     wroclaw_rynek1 : file(relativePath: { eq: "routes/Wroclaw-Rynek1_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     wroclaw_rynek2 : file(relativePath: { eq: "routes/Wroclaw-Rynek2_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     wroclaw_zydowski : file(relativePath: { eq: "routes/Wroclaw-Stary-Cmentarz-Zydowski1_www_th.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
`;